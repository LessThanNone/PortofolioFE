import { Container, Row, Col } from 'react-bootstrap';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary-custom">
      <Container>
        <h2 className="text-center heading">My <span>Journey</span></h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="mb-4">
              <p className="text-main fw-bold">2024 - 2028</p>
              <h4>Bachelor of Computer Science</h4>
              <p className="text-muted">University of Tarumanagara</p>
              <p>Focused on database management, data science, web and game developer.</p>
            </div>
            <hr />
            <div className="mt-4">
              <p className="text-main fw-bold">2021 - 2024</p>
              <h4>Vocational High School</h4>
              <p className="text-muted">Pelita IV Vocational High School</p>
              <p>Developed a strong fundamental in science and mathematics.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;