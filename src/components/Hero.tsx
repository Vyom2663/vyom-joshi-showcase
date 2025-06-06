import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-portfolio-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Hi, I'm <span className="text-portfolio-purple">Vyom Joshi</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Enthusiastic and motivated developer with a strong foundation in Computer Science and a passion for Web Development. Building creative solutions with clean code.
            </p>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/Vyom2663" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/vyom-joshi-66b8aa314/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0077B5] hover:bg-[#005885] text-white p-3 rounded-full transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:vyomjoshi2603@gmail.com" 
                className="bg-portfolio-purple hover:bg-purple-700 text-white p-3 rounded-full transition duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-portfolio-purple hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Contact Me
              </Link>
              <Link
                to="/projects"
                className="border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                See My Work
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-portfolio-purple shadow-xl animate-bounce-slow">
                <img 
                  src="/Images/pimage3.jpeg" 
                  alt="Vyom Joshi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-2 sm:p-4 rounded-lg shadow-lg">
                <div className="text-lg font-semibold text-portfolio-purple">Full Stack Developer</div>
                <div className="text-sm text-gray-600 text-balance">React/Next JS,Tailwind CSS, JS, Laravel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// //Dark mode code

// import { Github, Linkedin, Mail } from "lucide-react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-br from-white to-portfolio-light dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           <div className="md:w-1/2 order-2 md:order-1 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
//               Hi, I'm <span className="text-portfolio-purple">Vyom Joshi</span>
//             </h1>
//             <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
//               Full Stack Developer
//             </h2>
//             <p className="text-gray-700 dark:text-gray-400 mb-8 text-lg">
//               Enthusiastic and motivated developer with a strong foundation in
//               Computer Science and a passion for Web Development. Building
//               creative solutions with clean code.
//             </p>
//             <div className="flex space-x-4 mb-8">
//               <a
//                 href="https://github.com/Vyom2663"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition duration-300"
//                 aria-label="GitHub"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/vyom-joshi-66b8aa314/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#0077B5] hover:bg-[#005885] text-white p-3 rounded-full transition duration-300"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="mailto:vyomjoshi2603@gmail.com"
//                 className="bg-portfolio-purple hover:bg-purple-700 text-white p-3 rounded-full transition duration-300"
//                 aria-label="Email"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//             <div className="flex space-x-4">
//               <Link
//                 to="/contact"
//                 className="bg-portfolio-purple hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
//               >
//                 Contact Me
//               </Link>
//               <Link
//                 to="/projects"
//                 className="border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white px-6 py-3 rounded-md font-medium transition duration-300 dark:border-purple-500 dark:text-purple-300 dark:hover:bg-purple-500"
//               >
//                 See My Work
//               </Link>
//             </div>
//           </div>
//           <div className="md:w-1/2 order-1 md:order-2">
//             <div className="relative">
//               <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-portfolio-purple shadow-xl animate-bounce-slow">
//                 <img
//                   src="/Images/pimage3.jpeg"
//                   alt="Vyom Joshi"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
//                 <div className="text-lg font-semibold text-portfolio-purple">
//                   Full Stack Developer
//                 </div>
//                 <div className="text-sm text-gray-600 dark:text-gray-400 text-balance">
//                   React/Next JS, Tailwind CSS, JS, Laravel
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
