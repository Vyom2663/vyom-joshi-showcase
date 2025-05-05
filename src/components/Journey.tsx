import { Star, Calendar, Award, Book } from "lucide-react";

// Define the type for a milestone
interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    id: 1,
    year: "2020",
    title: "Started BSc in Information Technology",
    description:
      "Began my journey in the field of IT at Uka Tarsadia University, Bardoli.",
    icon: <Book size={20} />,
  },
  {
    id: 2,
    year: "2021",
    title: "First Web Development Project",
    description:
      "Completed my first major project - an e-commerce website using HTML, CSS, JS, and PHP.",
    icon: <Star size={20} />,
  },
  {
    id: 3,
    year: "2022",
    title: "Web Development Certification",
    description: "Earned certification in advanced web development techniques.",
    icon: <Award size={20} />,
  },
  {
    id: 4,
    year: "2023",
    title: "Graduated BSc IT & Started MCA",
    description:
      "Successfully completed Bachelor's with 5.76 CGPA and began Master's program at Sarvajanik College of Engineering and Technology.",
    icon: <Award size={20} />,
  },
  {
    id: 5,
    year: "2023",
    title: "Grocery Management System Project",
    description:
      "Developed a comprehensive system for inventory management and sales tracking.",
    icon: <Star size={20} />,
  },
  {
    id: 6,
    year: "2025",
    title: "Expected MCA Graduation",
    description:
      "Expected to complete Master's in Computer Applications with focus on advanced programming and systems design.",
    icon: <Calendar size={20} />,
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-16 sm:py-24 bg-gradient-to-br from-white to-portfolio-light"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          My <span className="text-portfolio-purple">Journey</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          The path I've taken to become a full stack developer has been filled
          with continuous learning, challenges, and growth.
        </p>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line (only for sm and up) */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-purple z-0"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className={`flex items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} relative`}>
                {/* Dot */}
                <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 z-10 bg-portfolio-purple text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {milestone.icon}
                </div>

                {/* Content block */}
                <div
                  className={`mt-10 sm:mt-0 sm:w-1/2 px-4 ${
                    index % 2 === 0
                      ? "sm:pr-8 sm:text-right"
                      : "sm:pl-8 sm:text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-portfolio-purple inline-block bg-portfolio-light px-3 py-1 rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side (desktop only) */}
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
