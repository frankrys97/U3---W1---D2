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
    searchInput: "",
  };
  render() {
    const searchedBook = this.state.selectedJson.filter((book) => {
      return book.title
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    return (
      <Container className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
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
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchInput}
            onChange={(e) => this.setState({ searchInput: e.target.value })}
            className="rounded rounded-2 p-1 border border-1 border-dark"
          />
        </div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {searchedBook.map((book) => (
            <Col key={`book-${book.asin}`}>
              <Card className="h-100 card">
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
