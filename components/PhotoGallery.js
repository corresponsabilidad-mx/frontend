//OPCION DOS PARA GALERIA DE IMAGENES

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const Gallery = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button className="gallery-btn" onClick={() => setToggler(!toggler)}>
        Niñas y Niños
      </button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "/images/carousel/carousel2.jpg",
          "/images/carousel/carousel4.jpg",
          "/images/carousel/carousel6.jpg",
          "/images/carousel/carousel9.jpg",
          "/images/carousel/carousel8.jpg",
          "/images/carousel/carousel10.jpg",
        ]}
        showThumbsOnMount={true}
      />
    </>
  );
};

export default Gallery;
