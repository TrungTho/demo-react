import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProducts: [
        {
          _id: "60943a89c14ef817dec62580",
          picture: "http://placehold.it/100x100",
          name: "Goldie Kennedy",
          company: "EBIDCO",
          email: "goldiekennedy@ebidco.com",
          phone: "+1 (940) 420-2745",
        },
        {
          _id: "60943a89d0dba6cabac38e85",
          picture: "http://placehold.it/100x100",
          name: "Stacy Blackburn",
          company: "KOZGENE",
          email: "stacyblackburn@kozgene.com",
          phone: "+1 (803) 584-3976",
        },
        {
          _id: "60943a89e0feb2a2b10ef64f",
          picture: "http://placehold.it/100x100",
          name: "Lowery Hendricks",
          company: "PLUTORQUE",
          email: "loweryhendricks@plutorque.com",
          phone: "+1 (846) 524-2490",
        },
        {
          _id: "60943a899b7529a6e9c3f5b2",
          picture: "http://placehold.it/100x100",
          name: "Joann Stark",
          company: "JETSILK",
          email: "joannstark@jetsilk.com",
          phone: "+1 (995) 405-3425",
        },
        {
          _id: "60943a89ba7826ecca5b6d65",
          picture: "http://placehold.it/100x100",
          name: "Kerr Alvarez",
          company: "COMSTAR",
          email: "kerralvarez@comstar.com",
          phone: "+1 (955) 523-2000",
        },
        {
          _id: "60943a89ba8eb0afa8e5db8c",
          picture: "http://placehold.it/100x100",
          name: "Scott Fitzpatrick",
          company: "FURNAFIX",
          email: "scottfitzpatrick@furnafix.com",
          phone: "+1 (945) 553-3392",
        },
        {
          _id: "60943a89dc20e07431563629",
          picture: "http://placehold.it/100x100",
          name: "Lori Mason",
          company: "OHMNET",
          email: "lorimason@ohmnet.com",
          phone: "+1 (992) 593-3024",
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.listProducts.map((product) => (
            <Col sm="4">
              <Card className="my-2">
                <CardImg
                  top
                  height="300px"
                  src={"https://source.unsplash.com/random"}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {product.email}
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
