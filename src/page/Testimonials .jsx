import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Albert Flores",
        role: "Senior Engineer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "I'm a designer, illustrator, and creator of templates, wireframe kits, and useful side-projects. I begin by understanding your vision.",
        rating: 5,
    },
    {
        id: 2,
        name: "Emily Carter",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        review:
            "Absolutely fantastic service! The design quality is outstanding, and the attention to detail is top-notch.",
        rating: 5,
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="w-11/12 mx-auto grid lg:grid-cols-2 items-center py-10 text-white">
            <div className=" ">
                <h4 className="flex mb-4  text-xl font-semibold"> <img src="https://i.ibb.co.com/StHFBM7/Group.png" className="w-6 h-6 mr-4" alt="" /> Client Reviews</h4>
                <h2 className=" text-xl lg:text-4xl font-bold">
                    See what people are saying <br />
                    <span className="bg-gradient">
                        about my work
                    </span>
                </h2>

                <div className=" flex my-12 gap-12">
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-12">
                                <span>+99</span>
                            </div>
                        </div>
                    </div>
                  <div className="">
                  <p className="text-[12px] lg:text-lg md:text-lg mt-2 text-gray-300">
                       <span className="font-bold  "> 1,00+ Happy Clients</span> <br /> Work With People And Brands Worldwide.
                    </p>
                  </div>
                </div>
            </div>

            <div className="flex  mt-8">
                <motion.div
                    key={testimonials[index].id}
                    className=" w-full max-w-2xl p-8 bg-[#2d15459b] rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Star Rating */}
                    <div className="flex justify-center mb-4">
                        {"⭐".repeat(testimonials[index].rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-lg text-gray-300">{testimonials[index].review}</p>

                    <div className="flex justify-between items-center  my-8 ">
                        {/* User Info */}
                        <div className="flex items-center justify-between mt-4">
                            <img
                                src={testimonials[index].image}
                                alt={testimonials[index].name}
                                className="w-14 h-14 rounded-full border-2 border-gray-400"
                            />
                            <div className="ml-3 text-left">
                                <h3 className="text-lg font-bold">{testimonials[index].name}</h3>
                                <p className="text-gray-400">{testimonials[index].role}</p>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <div className="   flex  gap-4">
                            <button
                                onClick={handlePrev}
                                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>




                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials