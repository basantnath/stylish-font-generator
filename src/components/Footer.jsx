import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
    { name: "GitHub", icon: FaGithub, href: "#" },
  ];

  return (
    <footer className="bg-indigo-900 text-white py-10 sm:mt-[170px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Font Lab</h2>
            <p className="text-gray-200 mt-2">
              Enhance your typography experience
            </p>
          </div>
          <div className="flex space-x-6  md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700  pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-row space-x-4 mb-4 md:mb-0 text-xs sm:text-sm">
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
            <p className="text-gray-300 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Font Lab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
