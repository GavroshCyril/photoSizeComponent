import React, { useState } from "react";
import Lightbox from "./components/CoolLightbox";
import ImageMosaic from "./components/ImageMosaic";
import { mosaicImages, lightboxImages } from "./images";

/**
 * Combines react-spring-lightbox with a custom image mosaic.
 *
 * Double click or single click + pinch to zoom
 * Click + drag to pan on zoomed images
 * Mousewheel or Keyboard Left/Right or swipe to page
 * Keyboard Esc to close
 * Keyboard Ctrl + Mousewheel or trackpad pinch to zoom to cursor
 *
 * Image will "bounce back" to its original size and position when:
 *     1. Panning too far off the screen (an image edge meets screen origin)
 *     2. Moving to the next image if the current one is zoomed and/or panned
 *     3. Zooming out to less than 100% of the image's original size
 *     4. Double click/tap a zoomed/panned image
 *
 * All UI elements in react-spring-lightbox are completely optional.
 * This demo has a fixed header, absolutely positioned footer and left/right buttons
 *
 * Repo
 * @see https://github.com/tim-soft/react-spring-lightbox
 *
 * Docs
 * @see https://timellenberger.com/libraries/react-spring-lightbox
 */
const ImageGallery = () => {
  const [isOpen, setOpen] = useState(true);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* react-photo-gallery */}
      <ImageMosaic
        images={mosaicImages}
        handleClick={(e, { index }) => {
          setCurrentIndex(index);
          setOpen(true);
        }}
      />
      {/* react-spring-lightbox */}
      <Lightbox
        currentImageIndex={currentImageIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        images={lightboxImages}
      />
    </>
  );
};

export default ImageGallery;
