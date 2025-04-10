import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "/public/banner-animation2.json";

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div id="banner">
            <div
                className="hero min-h-screen md:pt-0 lg:pt-12"
                style={{
                    backgroundImage: "url(https://i.ibb.co/whf5ZMdv/website-technology-line-dark-powerpoint-background-5d36931b39-960-540.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay bg-slate-900 opacity-80"></div>
                <div className="hero-content text-neutral-content z-[9]">
                    <div className="hero mt-24">
                        <motion.div
                            className="flex justify-between items-center gap-12 flex-col lg:flex-row-reverse"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Lottie Animation */}
                            <Lottie animationData={animationData} className="max-w-[800px]" data-aos="fade-left" />

                            <div>
                                <h1 className="text-5xl my-8 font-bold" data-aos="fade-right">
                                    Hi! I&apos;m <br /><span className="font-semibold text-4xl bg-gradient">MD: Nahid Hasan Mizan</span>
                                </h1>
                                <h1 className="text-3xl bg-gradient font-bold" data-aos="fade-up">
                                    <Typewriter
                                        words={["Web Designer 🖥  ", "Frontend Developer💻 ", "MERN Stack Aspirant"]}
                                        loop={false}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                         cursorColor="white"
                                    />
                                </h1>
                                <p className="py-6" data-aos="fade-up" data-aos-delay="300">
                                    From Dinajpur, Bangladesh. I&apos;m a Front End Web Developer who is passionate about making error-free websites. I am good at Responsive web Design, I love to talk with you about your unique projects.
                                </p>
                                <div className="btn-pro text-sm" data-aos="zoom-in">
                                    <button >
                                       <a href="/MyResume.pdf" download className="flex items-center gap-2"> Resume Here <FaDownload /></a>
                                    </button>
                                </div>
                                <div className="flex gap-4 my-12 font-bold text-lg" data-aos="fade-up" data-aos-delay="500">
                                    <Link to={`https://www.linkedin.com/in/nh-mizan-63326b2b7/`} className="btn-ui">
                                        <FaLinkedinIn />
                                    </Link>
                                    <Link to={`https://github.com/NH-Mizan`} className="btn-ui">
                                        <FaGithub />
                                    </Link>
                                    <Link to={`https://www.facebook.com/share/1H6uEk7zxc/`} className="btn-ui">
                                        <FaFacebook />
                                    </Link>
                                    <Link to={`/`} className="btn-ui">
                                        <TfiEmail />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;