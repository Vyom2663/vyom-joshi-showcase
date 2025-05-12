import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Optional: use any icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-portfolio-purple text-white shadow-lg hover:bg-violet-700 animate-bounce transition"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
