
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
