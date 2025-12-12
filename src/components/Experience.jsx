import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Self-Learning Project",
      role: "Full Stack MERN Developer",
      period: "2025",
      color: "bg-blue-500",
      details:
        "Built StudyNotion, a full-stack MERN ed-tech platform with frontend and backend development, API integration, authentication, and database management.",
    },
    {
      company: "Personal Project",
      role: "Frontend Developer",
      period: "2025",
      color: "bg-green-500",
      details:
        "Designed and developed a complete personal portfolio using modern UI/UX, reusable components, and fully responsive layout.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 pt-16 pb-4 bg-gray-100"

    >
      <h2 className="text-4xl font-bold mt-20 mb-16 text-center text-gray-800">
        Experience Journey
      </h2>

      {/* Centered column like Projects grid */}
      <div className="max-w-3xl mx-auto relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="mb-16 flex items-start"
          >
            {/* Round Icon */}
            <motion.div
              className={`w-12 h-12 rounded-full flex shrink-0 items-center justify-center ${exp.color} text-white shadow-lg`}
              whileHover={{ scale: 1.1 }}
            >
              <Briefcase size={24} />
            </motion.div>

            {/* White Card (same padding style as Projects) */}
            <motion.div
              className="ml-8 bg-white p-6 rounded-xl shadow-lg w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {exp.role}
              </h3>

              <div className="flex items-center text-gray-600 mb-1">
                <Building size={18} className="mr-2" />
                <span>{exp.company}</span>
              </div>

              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar size={18} className="mr-2" />
                <span>{exp.period}</span>
              </div>

              <p className="text-gray-600 leading-relaxed">{exp.details}</p>
            </motion.div>
          </motion.div>
        ))}

        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>
      </div>
    </motion.div>
  );
};

export default Experience;
