
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-portfolio-purple">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl border-4 border-portfolio-lightpurple">
                <img 
                  src="/Images/my-resume.png" 
                  alt="Vyom Joshi" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-portfolio-purple rounded-lg"></div>
              <div className="absolute -top-6 -left-6 h-24 w-24 bg-portfolio-lightpurple rounded-lg"></div>
            </div>
          </div>
          <div className="md:w-3/5 mt-12 md:mt-0">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-purple">Full Stack Developer</h3>
            <p className="text-gray-700 mb-4 text-lg">
              I am an enthusiastic and motivated individual with a strong foundation in Computer Science and a passion for Web Development. Equipped with excellent problem-solving abilities, effective communication skills, and a keen attention to detail. I thrive in both independent and collaborative team environments and believe in tackling challenges with creativity and determination.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              My goal is to bring a positive attitude and a strong work ethic to a dynamic team where I can contribute to achieving organizational goals and continue developing my skills. I'm constantly learning new technologies and techniques to improve my craft.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-portfolio-light text-portfolio-purple px-4 py-2 rounded-full text-sm font-medium">HTML/CSS</span>
              <span className="bg-portfolio-light text-portfolio-purple px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="bg-portfolio-light text-portfolio-purple px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
              <span className="bg-portfolio-light text-portfolio-purple px-4 py-2 rounded-full text-sm font-medium">React.js/Next.js</span>
              <span className="bg-portfolio-light text-portfolio-purple px-4 py-2 rounded-full text-sm font-medium">Laravel</span>
              <span className="bg-portfolio-light text-portfolio-purple px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
            </div>
            <Link 
              to="/experience" 
              className="bg-portfolio-purple hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium inline-block transition duration-300"
            >
              My Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
