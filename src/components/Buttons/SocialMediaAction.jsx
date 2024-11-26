import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, MessageCircle, Send, X } from "lucide-react";

export default function SocialMediaAction() {
  const [isOpen, setIsOpen] = useState(false);

  const socialIcons = [
    {
      icon: <Facebook className="h-5 w-5" />,
      color: "bg-blue-600 hover:bg-blue-700",
      label: "Facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: <Send className="h-5 w-5" />,
      color: "bg-sky-400 hover:bg-sky-500",
      label: "Telegram",
      link: "https://telegram.org/",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      color: "bg-purple-600 hover:bg-purple-700",
      label: "Viber",
      link: "https://www.viber.com/",
    },
  ];

  return (
    <div className="fixed right-3 bottom-[100px] z-50 md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 right-0 flex flex-col gap-4"
            >
              {socialIcons.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: index * 0.1 },
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className={`h-12 w-12 rounded-full ${social.color} text-white shadow-lg transition-colors duration-200 flex items-center justify-center`}
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={false}
          animate={
            isOpen ? { scale: 1.2, rotate: 45 } : { scale: 1, rotate: 0 }
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div
            className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
