import { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("banner"); // Default active section

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Update active section
    }
  };

  return (
    <div className="w-full fixed top-0 z-[99] bg-dark">
      <div className="relative">
        <nav className="w-11/12 mx-auto">
          <div className="py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl text-white font-bold">
                    <span className="span-color">NH</span> MIZAN
                    <span className="span-color">.</span>
                  </h2>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden z-[1]">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    {!isOpen ? (
                      <FaBars className="w-6 h-6" />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <div
                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-dark lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                  isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
                }`}
              >
                <div className="flex flex-col -mx-6 lg:flex-row font-bold lg:items-center lg:mx-8">
                  {[
                    { id: "banner", name: "Home" },
                    { id: "about", name: "About Us" },
                    { id: "skills", name: "Skills" },
                    { id: "education", name: "Education" },
                    { id: "portfolio", name: "Projects" },
                    { id: "contact", name: "Contact Us" },
                  ].map((item) => (
                    <NavLink
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 ${
                        activeSection === item.id
                          ? "text-white shadow shadow-white"
                          : "text-[#61557c] hover:text-white dark:hover:bg-gray-700"
                      }`}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                <div className="btn-pro-max text-sm">
                  <button className="flex items-center gap-2">
                    Resume Here <FaDownload />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
