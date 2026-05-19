import { useState } from "react";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logoLight.png";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Properties", id: "properties" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-md 
      bg-white/70 dark:bg-darkCard/70 
      border-b border-white/20 dark:border-darkBorder 
      transition-all duration-500 fade-down"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ✅ Dual Logo */}
        <a href="#home" className="cursor-pointer">
          <img
            src={logoLight}
            alt="AJK Estates Logo"
            className="h-10 object-contain dark:hidden"
          />
          <img
            src={logoDark}
            alt="AJK Estates Logo"
            className="h-10 object-contain hidden dark:block"
          />
        </a>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="relative 
                text-gray-700 dark:text-darkText
                hover:text-primary dark:hover:text-accent
                transition duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-primary dark:after:bg-accent
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-2xl transition-transform duration-500 hover:scale-110"
          >
            <span
              className={`inline-block transition-transform duration-500 ${
                theme === "dark" ? "rotate-180" : "rotate-0"
              }`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </button>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-primary text-white 
            dark:bg-accent dark:text-darkBg
            px-5 py-2 rounded-lg
            hover:scale-105 active:scale-95
            transition-all duration-300"
          >
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-primary dark:text-accent transition duration-300"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden 
          bg-white/90 dark:bg-darkCard/90 
          backdrop-blur-md 
          shadow-md 
          px-6 py-6 
          space-y-6 
          text-center 
          transition-all duration-500"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 dark:text-darkText 
              hover:text-primary dark:hover:text-accent 
              transition duration-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-primary text-white 
            dark:bg-accent dark:text-darkBg
            py-2 rounded-lg
            hover:scale-105 active:scale-95
            transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;