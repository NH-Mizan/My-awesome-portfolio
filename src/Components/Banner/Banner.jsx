import { FaDownload, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div id="banner">
            <div
                className="hero min-h-screen pt-12 "
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/whf5ZMdv/website-technology-line-dark-powerpoint-background-5d36931b39-960-540.jpg)",
                }}>
                <div className="hero-overlay bg-slate-900 opacity-80"></div>
                <div className="hero-content text-neutral-content z-[9]">
                    <div className="hero mt-24">
                        <motion.div 
                            className="flex justify-between items-center gap-16 flex-col lg:flex-row-reverse"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            
                            <motion.img
                                src="https://i.ibb.co.com/jPqwYFgg/IMG-20250218-015445-removebg-preview.png"
                                animate={{ x: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className=" rounded-xl border-t-4 border-b-8 shadow
                                shadow-white bg-red-100 border-black" 
                            />
                          


                            
                            <div>
                                <motion.h1 
                                    className="text-5xl my-8 font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    Hi! I&apos;m <span className="font-semibold bg-gradient ">MD:Nahid Hasan Mizan</span>
                                </motion.h1>
                                <motion.h1 
                                    className="text-3xl bg-gradient font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                >
                                    <Typewriter
                                        words={[
                                            'Web Designer',
                                            'Frontend Developer',
                                            'MERN Stack Aspirant ',
                                        ]}
                                        loop={false} 
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </motion.h1>
                                <motion.p 
                                    className="py-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                >
                                    From Dinajpur, Bangladesh. I&apos;m a Front End Web Developer who is passionate about making error-free websites. I am good at Responsive web Design, I love to talk with you about your unique projects.
                                </motion.p>
                                <motion.div 
                                    className="btn-pro text-sm"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.1 }}
                                >
                                    <button className="flex items-center gap-2">Resume Here <FaDownload /></button>
                                </motion.div>
                                <motion.div 
                                    className="flex gap-4 my-12 font-bold text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.3 }}
                                >
                                    <Link  className="btn-ui"> <FaLinkedinIn />  </Link>
                                    <Link className="btn-ui"><FaGithub /></Link>
                                    <Link className="btn-ui">  <FaFacebook /></Link>
                                    <Link className="btn-ui"><TfiEmail /></Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
