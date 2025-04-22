
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
