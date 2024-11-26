import * as React from "react";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default React.memo(function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOffcanvas = () => {
    const offcanvas = document.querySelector(".offcanvas");
    if (offcanvas) {
      if (isOpen) {
        offcanvas.classList.add("show");
        document.body.style.overflow = "hidden";
      } else {
        offcanvas.classList.remove("show");
        document.body.style.overflow = "unset";
      }
    }
  };

  React.useEffect(() => {
    handleOffcanvas();
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Free Fire Nickname", href: "/free-fire-nickname" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
  ];

  const MobileMenuButton = () => (
    <button
      className={`md:hidden inline-flex items-center justify-center p-2 rounded-md ${
        isOpen ? "text-white" : "text-white"
      } hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-300`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );

  const SocialIcons = ({ links }) => (
    <div className="hidden md:flex items-center justify-end space-x-5 bg-white px-4 py-2 rounded-2xl">
      {links.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            className="text-indigo-600 hover:text-indigo-700 transform hover:scale-120 transition-transform duration-300"
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[56px]">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 brand-name"
            >
              Font Lab
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:flex-1 justify-center">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.label}
                  className={({ isActive }) =>
                    `text-white hvr-underline-from-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "backdrop-blur-xl bg-white/15 rounded-full p-2"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <SocialIcons links={socialLinks} />

          {/* Mobile menu button */}
          <MobileMenuButton />
        </div>
      </div>

      {/* Mobile menu - Enhanced off-canvas */}
      <div
        id="mobile-menu"
        className={`offcanvas fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <a href="#" className="text-xl font-bold text-indigo-600">
            Font Lab
          </a>
          <button
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-8">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className="flex items-center w-full px-4 py-3 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-10 flex items-center justify-between">
            <p className="px-4 text-md font-medium text-black">Follow us</p>
            <div className="mt-4r px-4 flex items-center bg-[#ff4550] rounded-xl shadow-md ">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 text-white rounded-full"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="  backdrop-blur-md fixed inset-0 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
});
