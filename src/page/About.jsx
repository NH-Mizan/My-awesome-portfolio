import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="about" className="w-11/12 mx-auto min-h-screen pt-12">
      <div className="hero">
        <div className="flex justify-between items-center gap-12 flex-col lg:flex-row">
          {/* Animated Image */}
          <img
src="https://i.ibb.co.com/7x0dcdZS/nahid-removebg-preview.png"
            className="rounded-full w-84 bg-lime-300"
            data-aos="fade-right"
          />

          {/* Text Content */}
          <div data-aos="fade-left">
            <h1 className="text-5xl text-white font-bold">
              About <span className="span-color">Me!</span>
            </h1>
            <h3 className="py-6  text-2xl text-white">
            “Helping businesses grow with creative web design and development solutions.
            </h3>
            <hr className="p-4 text-xl" />
            <p>
              I am a passionate web developer with over two years of experience in building and delivering high-quality web applications. 
              My expertise lies in HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and jQuery, with a strong focus on creating 
              user-friendly and responsive designs.
              <br /><br />
              I excel in converting designs from PSD, XD, XI, and Figma into pixel-perfect, fully functional HTML. 
              Throughout my career, I have successfully completed numerous projects that showcase my ability to solve 
              complex problems, deliver clean code, and contribute to the overall success of development teams.
              <br /><br />
              My goal is to continue growing as a developer, stay updated with industry trends, and contribute to 
              innovative and impactful projects.
              <br /><br />
              Feel free to connect if you&apos;re looking for someone with a proactive mindset and a passion for continuous improvement...
              <br /><br />
             
            </p>

            {/* Buttons with Hover Effects */}
            <div className="mt-8" data-aos="fade-up">
              <motion.button 
                className="btn-pro mr-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hire Me
              </motion.button>

              <motion.button 
                className="btn-pro-max"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
