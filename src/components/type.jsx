import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({
  text = "Hai, I'm Saurav Singh",
  delay = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // Exit if text is undefined or empty
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);

        console.log("Text prop:", text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval); // Clean up on unmount
  }, [text, delay]);

  return (
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-4xl font-bold mb-4 mt-10"
    >
      {displayedText}
    </motion.h1>
  );
};

export default TypewriterText;
