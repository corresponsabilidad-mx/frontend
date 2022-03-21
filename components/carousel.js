import { Button, Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const PhotoCarousel = () => {
  const images = [
    "/images/carousel/carousel6 Photo by Anelale Nájera on Unsplash.jpg",
    "/images/carousel/carousel7 Photo by Aquiles Carattino on Unsplash.jpg",
    "/images/carousel/carousel8 Photo by Charu Chaturvedi on Unsplash.jpg",
    "/images/carousel/carousel5.jpg",
    "/images/carousel/carousel11 Photo by Womanizer Toys on Unsplash.jpg",
    "/images/carousel/carousel3.jpg",
  ];

  return (
    <Carousel variant="light">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={image}
            alt="First slide"
            width={1000}
            height={350}
            objectFit="cover"
            layout="responsive"
          />
          <Carousel.Caption>
            <h2>Quiénes somos</h2>
            <h5>Trabajamos por la prevención e igualdad de derechos</h5>
            <Button className="mt-3 mb-3 fs-6 btn-light btn-lg">
              <Link href="#">
                <a className="text-decoration-none text-dark">CONOCENOS</a>
              </Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
