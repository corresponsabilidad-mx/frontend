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
      {/* <Gallery /> */}
      <h2>Niñas y Niños</h2>
      <PhotoSection images={images} />
      <h2>Adolescentes</h2>
      <PhotoSection images={images2} />
      <h2>Mujeres</h2>
      <PhotoSection images={images3} />
    </div>
  );
}
