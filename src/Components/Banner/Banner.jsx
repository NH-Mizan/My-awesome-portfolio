
import { FaDownload, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router";

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[500px] pt-12"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/whf5ZMdv/website-technology-line-dark-powerpoint-background-5d36931b39-960-540.jpg)",
                }}>
                <div className="hero-overlay bg-slate-900 opacity-80"></div>
                <div className="hero-content text-neutral-content z-[99]">
                    <div className="hero mt-24">
                        <div className="flex justify-between items-center gap-16 flex-col lg:flex-row-reverse">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className=" rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Hi! I&apos;m MD:NAHID HASAN MIZAN</h1>
                                <h1 className="text-3xl font-bold">Frontend Developer</h1>
                                <p className="py-6">
                                From Dinajpur, Bangladesh. I&apos;m a Front End Web Developer who is passionste about making error-free website. I am good at Responsive web Design, I love to talk with you about your unique.
                                </p>
                                <button className="btn btn-primary">Resume Here <FaDownload /></button>


                                <div className="flex gap-4 my-12 font-bold text-lg "> 
                               <Link className="border-2 border-cyan-400 p-2 rounded-full" > <FaLinkedinIn />  </Link>
                                <Link className="border-2 border-cyan-400 p-2 rounded-full"><FaGithub /></Link>
                               <Link className="border-2 border-cyan-400 p-2 rounded-full">  <FaFacebook /></Link>
                                <Link className="border-2 border-cyan-400 p-2 rounded-full"><TfiEmail /></Link>

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