import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
 // update the path as needed

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="about" className="w-11/12 mx-auto min-h-screen pt-12">
      <div className="hero">
        <div className="flex justify-between items-center gap-12 flex-col lg:flex-row">
          {/* Animated Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="relative"
          >
         
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Floating Profile Image */}
              <motion.img
                 src="https://i.ibb.co.com/7x0dcdZS/nahid-removebg-preview.png"
                alt="Nahid Hasan Mizan"
                className="w-full h-full object-cover rounded-full border-4 border-[#00ff95] p-1 z-10 relative"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating border */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00ff95] border-r-[#00ff95] z-0"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
              />

              {/* Tech Badges */}
              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#1f242d] text-[#00ff95] text-xs font-bold px-3 py-1 rounded-full border border-[#00ff95] z-20 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#00ff95",
                  color: "white",
                }}
              >
                React
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-2 -translate-y-1/2 bg-[#1f242d] text-[#00ff95] text-xs font-bold px-3 py-1 rounded-full border border-[#00ff95] z-20 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#00ff95",
                  color: "white",
                }}
              >
                JS
              </motion.div>

              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1f242d] text-[#00ff95] text-xs font-bold px-3 py-1 rounded-full border border-[#00ff95] z-20 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#00ff95",
                  color: "white",
                }}
              >
                CSS
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-2 -translate-y-1/2 bg-[#1f242d] text-[#00ff95] text-xs font-bold px-3 py-1 rounded-full border border-[#00ff95] z-20 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#00ff95",
                  color: "white",
                }}
              >
                Node
              </motion.div>

              {/* Glowing Pulse Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#00ff95] z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div data-aos="fade-left">
            <h1 className="text-5xl text-white font-bold">
              About <span className="span-color">Me!</span>
            </h1>
            <h3 className="py-4 text-2xl text-white">
              “Helping businesses grow with creative web design and development solutions.”
            </h3>
            <hr className="p-4 text-xl" />
            <p className="text-white">
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
            </p>

            {/* Buttons */}
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
