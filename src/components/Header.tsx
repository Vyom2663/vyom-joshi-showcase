import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Experience", path: "/experience" },
    { title: "Projects", path: "/projects" },
    { title: "Journey", path: "/journey" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-portfolio-purple">
          Vyom<span className="text-gray-800">Joshi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-gray-700 hover:text-portfolio-purple transition duration-300 font-medium"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-portfolio-purple"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-5 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-gray-700 hover:text-portfolio-purple transition duration-300 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// Dark mode code

// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { title: "Home", path: "/" },
//     { title: "About", path: "/about" },
//     { title: "Experience", path: "/experience" },
//     { title: "Projects", path: "/projects" },
//     { title: "Journey", path: "/journey" },
//     { title: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link
//           to="/"
//           className="text-2xl font-bold text-portfolio-purple dark:text-purple-400"
//         >
//           Vyom<span className="text-gray-800 dark:text-white">Joshi</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.title}
//               to={item.path}
//               className="text-gray-700 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-purple-400 transition duration-300 font-medium"
//             >
//               {item.title}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden text-gray-700 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-purple-400"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div
//           ref={menuRef}
//           className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 animate-fade-in"
//         >
//           <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.title}
//                 to={item.path}
//                 className="text-gray-700 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-purple-400 transition duration-300 py-2 font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
