import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/Photo.jpg";
import TypewriterText from "./type";
const Introduction = () => {
  return (
    <>
      <style>
        {`
  .div1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #001244; /* Outer border color */
    height: 300px;
    width: 300px;
    border-radius: 50%; /* Makes it a circle */
    padding: 10px; /* Space between outer and inner circles */
  }

  .div2 {
    height: 280px;
    width: 280px;
    border-radius: 50%; /* Inner circle */
    overflow: hidden;
    background-color: #4FD1C5; /* Inner border color */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    height: 90%; /* Adjusted for centering inside */
    width: 90%;
    background-color: orange;
    display: block;
    border-radius: 80%; /* Makes the image circular */
  }
    `}
      </style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <TypewriterText />

        <center>
          <motion.div
            className="div1 mb-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="div2"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img className="img" src={profile} />
            </motion.div>
          </motion.div>
        </center>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg "
        >
          A passionate <strong>Software Developer</strong>  and  <strong>UI/UX Designer</strong> with a growing interest in full-stack web development.
          I’m currently exploring both frontend and backend technologies, focusing on building efficient and user-friendly applications.

        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg mt-4"
        >
         I’m in my final year of BTech in <strong>Computer Science and Engineering at Gyan Ganga College of Technology, Jabalpur, [Madhya Pradesh]</strong>,
         where I’ve developed a solid technical foundation through continuous learning and hands-on practice.
         I have strong command over <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, and enjoy working across the complete development cycle.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-lg mt-4">
          I recently built <strong>StudyNotion</strong>, a <strong>MERN-stack</strong> based <strong>ed-tech</strong> platform where I implemented API integration, user authentication, dynamic routing, and various core full-stack features.
          Projects like this help me sharpen my skills and push me toward becoming a more capable developer
        </motion.p>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-lg mt-4"
        >
          I am always eager to learn new technologies, collaborate on innovative
          ideas, and make meaningful contributions in the tech world.
        </motion.p>
      </motion.div>
    </>
  );
};

export default Introduction;
