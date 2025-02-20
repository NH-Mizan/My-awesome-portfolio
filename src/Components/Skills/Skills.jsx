import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div id="skills" className="bg-dark py-8">
            <h1 className="text-center my-8 text-5xl text-white font-bold">
                I Have <span className="span-color">Skills!</span>
            </h1>
            <div className="w-11/12 mx-auto">
                <motion.div 
                    className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 gradient-true"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {[
                        "https://i.ibb.co.com/vCdb6NM3/HTML.png",
                        "https://i.ibb.co.com/LDT5GpJ3/CSS.png",
                        "https://i.ibb.co.com/FqjQdB89/Tailwind.png",
                        "https://i.ibb.co.com/0ynZrQDr/Bootstrap.png",
                        "https://i.ibb.co.com/TMwCxV7B/Java-Script.png",
                        "https://i.ibb.co.com/v6pVs9YP/React.png",
                        "https://i.ibb.co.com/84Sp0B5X/React-Router-Dom.png",
                        "https://i.ibb.co.com/TDZwPBSP/Nodejs.png",
                        "https://i.ibb.co.com/s9TwKZDf/Express.png",
                        "https://i.ibb.co.com/wZ15vqNj/MongoDB.png",
                        "https://i.ibb.co.com/qY0MjZHs/JWT.png",
                        "https://i.ibb.co.com/X1rH8jM/Firebase.png",
                    ].map((src, index) => (
                        <motion.div 
                            key={index} 
                            className="border-2 border-[#61557c]  rounded-xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img src={src} alt="" className="rounded-xl" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
