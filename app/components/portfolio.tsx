import { Container, Row, Col, Card, Button, CardBody, CardTitle, CardText} from 'react-bootstrap';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Insurance Marketplace Website',
    description: 'A full-stack web application.',
    imgSrc: '/Insurance-project.png', 
    link: 'https://github.com/LessThanNone/ProjectAsuransi---Coverin',
  },
  {
    title: '2D Platformer Game',
    description: 'A side-scrolling adventure game built with Unity and C#.',
    imgSrc: '/Game-project.png', 
    link: 'https://itch.io/',
  },
  {
    title: 'Food Price Forecasting',
    description: 'A Python-based analysis using time series models.',
    imgSrc: '/Data-project.webp',
    link: 'https://www.kaggle.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-secondary-custom">
      <Container>
        <h2 className="text-center heading">Latest <span>Projects</span></h2>
        <Row>
          {portfolioItems.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow border-0 overflow-hidden">
                <Image src={item.imgSrc} alt={item.title} width={400} height={250} style={{objectFit: 'cover'}} />
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.description}</CardText>
                  <Button href={item.link} variant="link" className="p-0 text-main">
                    View Project <i className="bi bi-arrow-right"></i>
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;