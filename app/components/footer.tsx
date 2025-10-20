import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}>
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} by Charless. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;