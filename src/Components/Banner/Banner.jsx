
import { FaDownload, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router";
import { motion } from "motion/react"
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen pt-12 "
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/whf5ZMdv/website-technology-line-dark-powerpoint-background-5d36931b39-960-540.jpg)",
                }}>
                <div className="hero-overlay bg-slate-900 opacity-80"></div>
                <div className="hero-content text-neutral-content z-[9]">
                    <div className="hero mt-24">
                        <div className="flex justify-between items-center gap-16 flex-col lg:flex-row-reverse">
                            <motion.img

                                src="https://i.ibb.co.com/4gR6grG8/Adobe-Express-file.png"
                                animate={{ y: [-10, 50, -10] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className=" rounded-lg shadow-2xl w-96" />
                            <div>
                                <h1 className="text-5xl my-8 font-bold">Hi! I&apos;m MD:NAHID HASAN MIZAN</h1>
                                <h1 className="text-3xl span-color font-bold">
                                    <Typewriter
                                        words={[
                                            'Web Designer',
                                            'Frontend Developer',
                                            'MERN Stack Aspirant ',
                                        ]}
                                        loop={false} // Change to true for infinite looping
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                    </h1>
                                <p className="py-6">
                                    From Dinajpur, Bangladesh. I&apos;m a Front End Web Developer who is passionste about making error-free website. I am good at Responsive web Design, I love to talk with you about your unique.
                                </p>
                                <div className="btn-pro text-sm ">  <button className="flex items-center gap-2">Resume Here <FaDownload /></button></div>


                                <div className="flex gap-4 my-12 font-bold text-lg ">
                                    <Link className="btn-ui " > <FaLinkedinIn />  </Link>
                                    <Link className="btn-ui"><FaGithub /></Link>
                                    <Link className="btn-ui">  <FaFacebook /></Link>
                                    <Link className="btn-ui"><TfiEmail /></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;