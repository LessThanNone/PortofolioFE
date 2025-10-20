'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center min-vh-100">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-4 fw-bold">Hi, I'm <span className="text-main">Charless</span></h1>
            <h3 className="h2 fw-semibold">Creative <span>Technology Professional</span></h3>
            <p className="lead my-4">
              Passionate about solving problems and building innovative digital solutions. I make digital experiences across data science, game development, and web technologies.
            </p>
            <div className="mb-4">
                 {}
                 <a href="https://www.linkedin.com/in/charless-89997b32b/" target='_blank' className="btn btn-outline-main rounded-circle me-2 p-2 lh-1"><i className="bi bi-linkedin"></i></a>
                 <a href="https://github.com/LessThanNone" target='_blank' className="btn btn-outline-main rounded-circle me-2 p-2 lh-1"><i className="bi bi-github"></i></a>
                 <a href="https://x.com/" target='_blank' className="btn btn-outline-main rounded-circle me-2 p-2 lh-1"><i className="bi bi-twitter-x"></i></a>
                 <a href="https://www.instagram.com/" target='_blank' className="btn btn-outline-main rounded-circle p-2 lh-1"><i className="bi bi-instagram"></i></a>
            </div>
            <div>
              <Button href="https://github.com/LessThanNone" target='_blank' variant="main" size="lg" className="me-2">View My CV</Button>
              <Button href="#contact" variant="outline-main" size="lg">Let's Collaborate</Button>
            </div>
          </Col>
          <Col md={5} className="text-center d-none d-md-block">
            <Image src="/pas_foto_charless.png" alt="Charless Profile" width={350} height={350} className="rounded-circle img-fluid shadow" style={{ objectFit: 'cover', width: '350px',height: '350px',aspectRatio: '1/1' }}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;