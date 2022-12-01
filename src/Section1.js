import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image5 from "./image/image5.webp";
import Card from 'react-bootstrap/Card';
import { Button, Container,Row, Col} from 'react-bootstrap';



function Section1(){
    return(
        <div>
            <Container >
                <Row>
                    <Col className='my-4 mx-auto'>
                    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={Image5} />
      {/* <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>

                    </Col>
                    <Col className='my-4 mx-3'>
                     
                        <Card style={{ width: '30rem' }} className = 'border-0'>
                            {/* <Card.Header>Featured</Card.Header> */}
                            <Card.Body>
                                <Card.Title>Business name or tagline</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                      

                    </Col>

                </Row>

            </Container>

        </div>
    );
}
export default Section1;