import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      id="about" 
      className="w-11/12 mx-auto min-h-screen pt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero">
        <div className="flex justify-between items-center gap-12 flex-col lg:flex-row">
          {/* Animated Image */}
          <motion.img
            src="https://i.ibb.co.com/7x0dcdZS/nahid-removebg-preview.png"
            className="rounded-lg w-84 bg-lime-300 border-re"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl text-white font-bold">
              About <span className="span-color">Me!</span>
            </h1>
            <p className="py-6 text-white">
              Web Developer | | Front-End Developer | | MERN Stack Aspirant
            </p>
            <hr className="p-4" />
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
              <strong>Thank you!</strong>
            </p>

            {/* Buttons with Hover Effects */}
            <div className="mt-8">
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
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
