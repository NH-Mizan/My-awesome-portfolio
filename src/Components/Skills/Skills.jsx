import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const frontend = [
    "https://i.ibb.co.com/vCdb6NM3/HTML.png",
    "https://i.ibb.co.com/LDT5GpJ3/CSS.png",
    "https://i.ibb.co.com/FqjQdB89/Tailwind.png",
    "https://i.ibb.co.com/0ynZrQDr/Bootstrap.png",
    "https://i.ibb.co.com/TMwCxV7B/Java-Script.png",
    "https://i.ibb.co.com/v6pVs9YP/React.png",
    "https://i.ibb.co.com/84Sp0B5X/React-Router-Dom.png",

]
const backend = [
    "https://i.ibb.co.com/TDZwPBSP/Nodejs.png",
    "https://i.ibb.co.com/s9TwKZDf/Express.png",
    "https://i.ibb.co.com/wZ15vqNj/MongoDB.png",
    "https://i.ibb.co.com/qY0MjZHs/JWT.png",
    "https://i.ibb.co.com/X1rH8jM/Firebase.png",
]



const Skills = () => {
    return (
        <div id="skills" className=" py-8 w-11/12 mx-auto">
            <h1 className="text-center my-8 text-5xl text-white font-bold">
                I Have <span className="span-color">Skills!</span>
            </h1>
            <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 ">
                <div className=" border-r-2 p-12">
                    {/* Frontend Tecnologys */}

                    <h2 className="font-semibold text-lg lg:text-2xl flex items-center   my-8"><img src="https://i.ibb.co.com/StHFBM7/Group.png" className="w-6 h-6 mr-4" alt="" />skills <span className="font-semibold text-2xl ml-4 bg-gradient">
                        <Typewriter
                            words={[" Frontend  ",]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                            cursorColor="white"
                        />

                    </span></h2>
                    <motion.div
                        className="flex gap-4 flex-row"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {frontend.map((src, index) => (
                            <motion.div
                                key={index}
                                className="border-2 border-[#61557c]  rounded-xl w-[50%]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img src={src} alt="" className="rounded-xl" />
                            </motion.div>
                        ))}
                    </motion.div>


                    {/* Backend Tecnologys  */}

                    <div className=" ">
                    <h2 className="font-semibold text-lg lg:text-2xl flex items-center   my-8"><img src="https://i.ibb.co.com/StHFBM7/Group.png" className="w-6 h-6 mr-4" alt="" /> skills <span className="font-semibold text-2xl ml-4 bg-gradient">
                        <Typewriter
                            words={[" Backend  ",]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={100}
                            delaySpeed={1500}
                            cursorColor="white"
                            
                        />

                    </span></h2>
                    <motion.div
                        className="flex gap-4 flex-row"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {backend.map((src, index) => (
                            <motion.div
                                key={index}
                                className="border-2 border-[#61557c]  rounded-xl w-[50%]"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img src={src} alt="" className="rounded-xl" />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

                </div>
                <div className=""></div>

            </div>
        </div>
    );
};

export default Skills;
