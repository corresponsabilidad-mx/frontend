import { Card, Col, NavItem, Row } from "react-bootstrap";
import Link from "next/link";
const CardGroup = () => {
  const info = [
    {
      title: "Niñas y Niños",
      src: "/images/cards/carousel15.jpg",
      href: "/proyectos",
    },
    {
      title: "Adolescentes",
      src: "/images/cards/carousel17.jpg",
      href: "/proyectos",
    },
    {
      title: "Mujeres",
      src: "/images/cards/carousel1.jpg",
      href: "/proyectos",
    },
    {
      title: "Instituciones",
      src: "/images/cards/carousel11.jpg",
      href: "/proyectos",
    },
  ];

  return (
    <div className="m-5">
      <Row xs={2} md={4} className="g-4 d-flex justify-content-evenly">
        {info.map((c, idx) => {
          return (
            <Col className="card-drop d-flex justify-content-center" key={idx}>
              <Link href={c.href} passHref>
                <Card className="card card-drop">
                  <Card.Body className="card-drop primary-color d-flex">
                    <Card.Title className="card-title">
                      {c.title.toUpperCase()}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardGroup;
