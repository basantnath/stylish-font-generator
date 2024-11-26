import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-indigo-500 transition-width duration-300 ease-out z-10"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
