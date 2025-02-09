import Marquee from "react-fast-marquee";


const Skills = () => {
    return (
        <div id="skills" className="bg-dark py-8"> 
              <h1 className="text-center my-8 text-5xl text-white font-bold">I Have <span className="span-color">Skills!</span></h1>
           <div className="">
           <Marquee className="w-11/12 mx-auto gradient-true">
                
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-fuchsia-500 rounded-xl p-4 m-12 ">
                    <img src="https://i.ibb.co.com/5Wb41vqy/html.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">html</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-indigo-500 rounded-xl p-4 m-12">
                    <img src="https://i.ibb.co.com/Vp2Cf3Fv/css.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">css</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-white rounded-xl p-4 m-12">
                    <img src="https://i.ibb.co.com/ksT1K6xT/tailwind-3.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">tailwind  css</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-yellow-500 rounded-xl p-4 m-12">
                    <img src="https://i.ibb.co.com/FkWVnxZb/js.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">JavaScript</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-indigo-500 rounded-xl p-4 m-12">
                    <img src="https://i.ibb.co.com/qF52MvsV/react.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">React JS</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-lime-500 rounded-xl p-4 m-12">
                    <img src="https://i.ibb.co.com/Kcpr9BK5/mongodb.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">MongoDB</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-indigo-500 rounded-xl p-4 m-12 h-52 flex items-center justify-center flex-col">
                    <img src="https://i.ibb.co.com/1tT8Z5f9/nodejs.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">Node Js</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-yellow-500 rounded-xl p-4 m-12">
                    <img src="https://i.ibb.co.com/vvJZvP90/download-4.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl  font-bold">Express Js</h2>
                </div>
                <div className="border-2 border-red-300 bg-linear-to-bl from-violet-100 to-white rounded-xl p-4 m-12">
                    <img src="https://i.ibb.co.com/KxdcnprC/download-5.png" alt=""className="w-36" />
                    <h2 className="text-center text-xl font-bold">Firebase</h2>
                </div>
            </Marquee>
           </div>
        </div>
    );
};

export default Skills;