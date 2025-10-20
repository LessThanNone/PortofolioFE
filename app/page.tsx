import Header from './components/header';
import Hero from './components/hero';
import Education from './components/education';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}