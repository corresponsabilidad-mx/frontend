import { Button, Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const PhotoCarousel = () => {
  const images = [
    "/images/carousel/carousel2.jpg",
    "/images/carousel/carousel4.jpg",
    "/images/carousel/carousel6.jpg",
    "/images/carousel/carousel9.jpg",
    "/images/carousel/carousel8.jpg",
    "/images/carousel/carousel10.jpg",
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
            <Button className="mt-3 mb-3 fs-6 btn-light btn-lg btn-carousel">
              <Link href="/conocenos">
                <a className="text-decoration-none text-dark ">CONOCENOS</a>
              </Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
