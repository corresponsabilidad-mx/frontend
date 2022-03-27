import { Card, Col, NavItem, Row } from "react-bootstrap";

const CardGroup = () => {
  const info = [
    {
      title: "Niñas y Niños",
      src: "/images/cards/carousel15.jpg",
    },
    {
      title: "Adolescentes",
      src: "/images/cards/carousel17.jpg",
    },
    {
      title: "Mujeres",
      src: "/images/cards/carousel1.jpg",
    },
    {
      title: "Instituciones",
      src: "/images/cards/carousel11.jpg",
    },
  ];

  return (
    <div className="m-5">
      <Row xs={2} md={4} className="g-4">
        {info.map((c, idx) => {
          return (
            <Col key={idx}>
              <Card className="card">
                <Card.Img variant="top" src={c.src} />
                <Card.ImgOverlay className="card-overlay">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {c.title.toUpperCase()}
                    </Card.Title>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardGroup;
