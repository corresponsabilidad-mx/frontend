import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function CarouselPhoto() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/carousel/violencia1.jpg"
            alt="First slide"
            width={1000}
            height={300}
            objectFit="cover"
            layout="responsive"
          />
          <Carousel.Caption>
            <h3>Quiénes somos</h3>
            <p>Trabajamos por la prevención e igualdad de derechos</p>
            <button>CONÓCENOS</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/carousel/violencia3.jpg"
            alt="Second slide"
            width={1000}
            height={300}
            objectFit="cover"
            layout="responsive"
          />
          <Carousel.Caption>
            <h3>Quiénes somos</h3>
            <p>Trabajamos por la prevención e igualdad de derechos</p>
            <button>CONÓCENOS</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/carousel/violencia2.jpg"
            alt="Third slide"
            width={1000}
            height={300}
            objectFit="cover"
            layout="responsive"
          />
          <Carousel.Caption>
            <h3>Quiénes somos</h3>
            <p>Trabajamos por la prevención e igualdad de derechos</p>
            <button>CONÓCENOS</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <style jsx>{`
        button {
          font-size: 12px;
          background-color: transparent;
          border-radius: 5px;
          padding: 5px;
          width: 120px;
          heigth: 50px;
        }
      `}</style>
    </>
  );
}
