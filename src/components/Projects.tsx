
import { useState } from 'react';
import { GitHub, Link as LinkIcon } from 'lucide-react';

// Define the type for a project
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'app' | 'all';
}

// Create our projects data array - this can be modified easily
const projectsData: Project[] = [
  {
    id: 1,
    title: "Grocery Management System",
    description: "Developed a comprehensive Grocery Management System designed to streamline the inventory management, sales tracking and order processing for a grocery store.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    githubUrl: "https://github.com/Vyom5669",
    category: 'web',
  },
  {
    id: 2,
    title: "Fashism - E-Commerce Website",
    description: "Developed a fully functional E-commerce website designed to provide a smooth online shopping experience. It features a wide range of products, user-friendly navigation, secure payment processing, and comprehensive administrative tools.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    githubUrl: "https://github.com/Vyom5669",
    category: 'web',
  },
  {
    id: 3,
    title: "React & Node.js Email App",
    description: "Created a responsive email application with real-time notifications and intuitive interface for sending and receiving emails.",
    technologies: ["React.js", "Node.js", "JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    githubUrl: "https://github.com/Vyom5669",
    category: 'app',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'app'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-portfolio-purple">Projects</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project represents my passion for creating 
          clean, user-friendly and functional applications.
        </p>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 text-sm font-medium rounded-l-lg ${
                filter === 'all'
                  ? 'bg-portfolio-purple text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-5 py-2 text-sm font-medium ${
                filter === 'web'
                  ? 'bg-portfolio-purple text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-t border-b border-gray-200'
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setFilter('app')}
              className={`px-5 py-2 text-sm font-medium rounded-r-lg ${
                filter === 'app'
                  ? 'bg-portfolio-purple text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Other Apps
            </button>
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-portfolio-light text-gray-700 px-2 py-1 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-portfolio-purple transition-colors"
                    >
                      <GitHub size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-portfolio-purple transition-colors"
                    >
                      <LinkIcon size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more projects link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Vyom5669" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-portfolio-purple hover:text-purple-700 font-medium"
          >
            <span>View more on GitHub</span>
            <LinkIcon size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
