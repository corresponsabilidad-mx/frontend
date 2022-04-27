import Image from "next/image";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

const PhotoSection = ({ images, src }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="photo-container">
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="gallery-image"
            src={image.src}
            onClick={() => openImageViewer(index)}
            height="200"
            key={index}
            style={{ margin: "5px" }}
            alt=""
            title={image.title}
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
            style={{ marginTop: "50px" }}
            className="margin-top-100"
          />
        )}
      </div>
    </>
  );
};

export { PhotoSection };
