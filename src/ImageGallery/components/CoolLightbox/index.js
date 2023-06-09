import React from "react";
import PropTypes from "prop-types";
import Lightbox from "react-spring-lightbox";
import styled from "styled-components";
import Color from "color";
import { ArrowButton, Header } from "./components/Index";


const CoolLightbox = ({
  images,
  currentImageIndex,
  setCurrentIndex,
  isOpen,
  onClose
}) => {
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <StyledLightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      onClose={onClose}
      images={images}
      currentIndex={currentImageIndex}
      singleClickToZoom
      renderHeader={() => (
        <Header
          galleryTitle="Архиные изображения со стройки минского метрополитена"
          images={images}
          currentIndex={currentImageIndex}
          onClose={onClose}
        />
      )}
      renderPrevButton={({ canPrev }) => (
        <ArrowButton
          position="left"
          onClick={gotoPrevious}
          disabled={!canPrev}
        />
      )}
      renderNextButton={({ canNext }) => (
        <ArrowButton position="right" onClick={gotoNext} disabled={!canNext} />
      )}
    />
  );
};

CoolLightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ),
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CoolLightbox;

const StyledLightbox = styled(Lightbox)`
  background: ${({ theme }) =>
    Color(theme.accentColor)
      .alpha(0.95)
      .hsl()
      .string()};
  * ::selection {
    background: ${({ theme }) => theme.pageContentSelectionColor};
  }
  * ::-moz-selection {
    background: ${({ theme }) =>
      new Color(theme.pageContentSelectionColor).darken(0.57).hex()};
  }
`;
