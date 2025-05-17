import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", image: "https://i.ibb.co.com/vCdb6NM3/HTML.png", percent: 100 },
  { name: "CSS", image: "https://i.ibb.co.com/LDT5GpJ3/CSS.png", percent: 100 },
  { name: "Tailwind", image: "https://i.ibb.co.com/FqjQdB89/Tailwind.png", percent: 90 },
  { name: "Bootstrap", image: "https://i.ibb.co.com/0ynZrQDr/Bootstrap.png", percent: 85 },
  { name: "JavaScript", image: "https://i.ibb.co.com/TMwCxV7B/Java-Script.png", percent: 80 },
  { name: "React", image: "https://i.ibb.co.com/v6pVs9YP/React.png", percent: 75 },
  { name: "React Router", image: "https://i.ibb.co.com/84Sp0B5X/React-Router-Dom.png", percent: 75 },
  { name: "Node.js", image: "https://i.ibb.co.com/TDZwPBSP/Nodejs.png", percent: 80 },
  { name: "Express.js", image: "https://i.ibb.co.com/s9TwKZDf/Express.png", percent: 75 },
  { name: "MongoDB", image: "https://i.ibb.co.com/wZ15vqNj/MongoDB.png", percent: 80 },
  { name: "JWT", image: "https://i.ibb.co.com/qY0MjZHs/JWT.png", percent: 70 },
  { name: "Firebase", image: "https://i.ibb.co.com/X1rH8jM/Firebase.png", percent: 80 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 lg:px-16 text-white w-full max-w-7xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold  mb-12">
        My <span className="span-color">Skills</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-[#2d15459b] border border-[#61557c] rounded-xl p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.03] hover:border-cyan-400 hover:shadow-[0_0_20px_#00ffff40]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain rounded-md border border-gray-600 bg-white p-1"
            />
            <div className="ml-4 w-full">
              <h4 className="text-lg font-semibold">{skill.name}</h4>
              <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                <div
                  className="bg-gradient-to-r from-[#c33bf9] to-[#00ff95] h-3 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-300 mt-1 inline-block">
                {skill.percent}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
