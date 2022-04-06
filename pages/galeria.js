import Gallery from "../components/PhotoGallery";
import { PhotoSection } from "../components/KidsGallery";

export default function Galeria() {
  const images = [
    "/images/carousel/carousel2.jpg",
    "/images/carousel/carousel4.jpg",
    "/images/carousel/carousel6.jpg",
  ];
  const images2 = [
    "/images/carousel/carousel9.jpg",
    "/images/carousel/carousel8.jpg",
    "/images/carousel/carousel10.jpg",
  ];
  const images3 = [
    "/images/cards/carousel11.jpg",
    "/images/cards/carousel15.jpg",
    "/images/cards/carousel17.jpg",
  ];
  return (
    <div className="container">
      <div className="row mb-3">
        <h2 className="primary-color bg-transparent mb-2 text-start mt-3 p-2">
          Niñas y Niños
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection images={images} className="mb-5 bg-light p-5" />
      </div>
      <div className="row mb-3">
        <h2 className="primary-color bg-transparent mb-2 text-start mt-3 p-2">
          Adolescentes
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection images={images2} />
      </div>
      <div className="row mb-3">
        <h2 className="primary-color bg-transparent mb-2 text-start mt-3 p-2">
          Mujeres
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection images={images3} />
      </div>
    </div>
  );
}
