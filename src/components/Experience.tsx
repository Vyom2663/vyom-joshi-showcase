
import { Award, Book, Briefcase, Code } from 'lucide-react';

// Define the types for our experience items
interface ExperienceItem {
  title: string;
  company?: string;
  institution?: string;
  date: string;
  type: 'work' | 'education' | 'certificate';
  description: string;
  icon: React.ReactNode;
}

// Create our experiences array - this can be modified easily
const experienceData: ExperienceItem[] = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "Sarvajanik College of Engineering and Technology, Surat",
    date: "Expected Post-Graduation May'25",
    type: 'education',
    description: "Current CGPA: 8.56/10",
    icon: <Book className="text-portfolio-purple" size={24} />,
  },
  {
    title: "Bachelor of Science in Information Technology (BSc IT)",
    institution: "Uka Tarsadia University, Bardoli",
    date: "June'20 - May'23",
    type: 'education',
    description: "CGPA: 8.76/10",
    icon: <Book className="text-portfolio-purple" size={24} />,
  },
  {
    title: "Web Development",
    type: 'certificate',
    date: "2023",
    description: "Completed comprehensive training in modern web development frameworks and tools.",
    icon: <Award className="text-portfolio-purple" size={24} />,
  },
  {
    title: "Full Stack Development",
    type: 'certificate',
    date: "2022",
    description: "Mastered both frontend and backend technologies for complete application development.",
    icon: <Award className="text-portfolio-purple" size={24} />,
  },
];

// Define an array of skills
const skills = [
  { category: "Technical Skills", items: ["HTML", "CSS", "JavaScript", "React.js", "PHP", "Laravel", "MySQL"] },
  { category: "Soft Skills", items: ["Communication", "Problem-solving", "Time management", "Adaptability", "Team work"] },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience & <span className="text-portfolio-purple">Skills</span>
        </h2>
        
        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">My Journey</h3>
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="rounded-full p-2 bg-portfolio-light">
                    {item.icon}
                  </div>
                  {index !== experienceData.length - 1 && (
                    <div className="h-full w-0.5 bg-portfolio-lightpurple mt-2"></div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-grow border-l-4 border-portfolio-purple">
                  <div className="flex justify-between items-start flex-wrap">
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <span className="text-sm font-medium text-portfolio-purple px-3 py-1 bg-portfolio-light rounded-full">
                      {item.date}
                    </span>
                  </div>
                  {item.institution && (
                    <p className="text-gray-600 mt-1">{item.institution}</p>
                  )}
                  {item.company && (
                    <p className="text-gray-600 mt-1">{item.company}</p>
                  )}
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Skills & Strengths</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-portfolio-purple flex items-center">
                  <Code className="mr-2" size={20} />
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-portfolio-light text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
