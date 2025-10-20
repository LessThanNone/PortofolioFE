
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'react-bootstrap';

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <Container>
        <h2 className="text-center heading">What I <span>Offer</span></h2>
        <Row>
<Col md={4} className="mb-4">
  <Card className="text-center h-100 shadow-sm border-0">
    <CardBody className="p-4">
      <i className="bi bi-code-slash fs-1 text-main"></i>
      <CardTitle className="my-3">Web and Game Development</CardTitle>
      <CardText>
        Building interactive applications across various platforms.
      </CardText>
    </CardBody>
  </Card>
</Col>
          <Col md={4} className="mb-4">
            <Card className="text-center h-100 shadow-sm border-0">
              <CardBody className="p-4">
                <i className="bi bi-diagram-3 fs-1 text-main"></i>
                <CardTitle className="my-3">System & Logic Design</CardTitle>
                <CardText>Architecting backend systems, APIs, and databases for powerful applications.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center h-100 shadow-sm border-0">
              <CardBody className="p-4">
                <i className="bi bi-bar-chart-line fs-1 text-main"></i>
                <CardTitle className="my-3">Data Science & Analysis</CardTitle>
                <CardText>Working with data to uncover patterns and build predictive models.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;