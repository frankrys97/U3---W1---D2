import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import React from "react";

class AllBooks2 extends React.Component {
  state = {
    selectedJson: fantasy,
  };
  render() {
    return (
      <Container className="mt-3">
        <ButtonGroup aria-label="Basic example" className="my-3">
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              this.setState({ selectedJson: fantasy });
            }}
          >
            Fantasy
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              this.setState({ selectedJson: history });
            }}
          >
            History
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              this.setState({ selectedJson: horror });
            }}
          >
            Horror
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              this.setState({ selectedJson: romance });
            }}
          >
            Romance
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              this.setState({ selectedJson: scifi });
            }}
          >
            Scifi
          </Button>
        </ButtonGroup>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {this.state.selectedJson.map((book) => (
            <Col>
              <Card key={`book ${book.asin}`} className="h-100">
                <Card.Img
                  variant="top"
                  src={book.img}
                  alt={book.title}
                  className="cards-image"
                />
                <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.category} - {book.price}€
                  </Card.Text>
                  <Button variant="primary">Buy It</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllBooks2;
