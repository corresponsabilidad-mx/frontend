import { Button, Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const PhotoCarousel = () => {
  const images = [
    "/images/carrete/carrete1.jpg",
    "/images/carrete/carrete2.jpg",
    "/images/carrete/carrete3.jpg",
    "/images/carrete/carrete4.jpg",
    "/images/carrete/carrete5.jpg",
    "/images/carrete/carrete6.jpg",
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
            <h2 className="carousel-title">¿Quiénes somos?</h2>
            <h5 className="carousel-text">
              Correponsabilidad Social Mexicana, un camino a la prevención y la
              igualdad
            </h5>
            <Button className="mt-md-3 mb-3 fs-6 btn-light btn-sm btn-carousel">
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
