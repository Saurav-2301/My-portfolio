import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationItems = [
    {
      year: "2022-2026",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Gyan Ganga College of Technology",
      score: "7.60",
    },
    {
      year: "2021-2022",
      degree: "Higher Secondary School",
      institution: "Jay Jyoti School",
      score: "70%",
    },
    {
      year: "2019-2020",
      degree: "Secondary School",
      institution: "Jay Jyoti School",
      score: "70%",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16 mt-10 bg-gray-100"
    >
      <style>{`
          .cs{
            color: #001244;
          }
            .nonsc{
            background-color: #001244;
            }
      `}</style>
      <h2 className="text-4xl font-bold mb-12 mt-12 text-center text-gray-800">
        Educational Journey
      </h2>
      <div className="relative">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 flex justify-between items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <motion.div
              className="w-1/3 pr-8 text-right"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold cs">{item.year}</h3>
            </motion.div>
            <div className="w-1/3 px-4">
              <div className="w-4 h-4 nonsc rounded-full mx-auto"></div>
              <div className="w-1 h-full nonsc mx-auto"></div>
            </div>
            <motion.div
              className="w-2/3 pl-8 bg-white shadow-lg rounded-lg p-6"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-bold mb-2 text-gray-800">
                {item.degree}
              </h4>
              <p className="text-lg mb-2 text-gray-600">{item.institution}</p>
              <p className="text-md font-semibold cs">Score: {item.score}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
