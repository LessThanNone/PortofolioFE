'use client';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <h2 className="text-center heading">Get In <span>Touch</span></h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Full Name" size="lg" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email Address" size="lg" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Subject" size="lg" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={5} placeholder="Your Message" size="lg" required />
              </Form.Group>
              <div className="text-center">
                <Button variant="main" type="submit" size="lg">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;