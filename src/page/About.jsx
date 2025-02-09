

const About = () => {
  return (
    <div id="" className="w-11/12 mx-auto min-h-screen pt-12">
      <div className="hero  ">
        <div className="flex justify-between items-center gap-12 flex-col lg:flex-row">
          <img
            src="https://i.ibb.co.com/7x0dcdZS/nahid-removebg-preview.png"
            className="rounded-lg w-84 bg-lime-300" />
          <div>
            <h1 className="text-5xl text-white font-bold">About <span className="span-color">Me!</span></h1>
            <p className="py-6 text-white">
            Web Developer | | Front -End Developer | | MERN Stack Aspirant </p> <p><hr className="p-4"/></p>
            <p>

I am a passionate web developer with over two years of experience in building and delivering high-quality web applications. My expertise lies in HTML, CSS, JavaScript, React, and Tailwind CSS,Bootstrap, jQuery with a strong focus on creating user-friendly and responsive designs. I excel in converting designs from PSD, XD, XI, and Figma into pixel-perfect, fully functional HTML.

Throughout my career, I have successfully completed numerous projects that showcase my ability to solve complex problems, deliver clean code, and contribute to the overall success of development teams. I am always eager to learn new technologies, and currently, I am focused on mastering the MERN (MongoDB, Express.js, React, Node.js) stack to expand my full-stack development skills.

My goal is to continue growing as a developer, stay updated with industry trends, and contribute to innovative and impactful projects.

Feel free to connect if you&apos;re looking for someone with a proactive mindset and a passion for continuous improvement...
Thank you
            </p>
          
          <div className="mt-8">
          <button className="btn-pro mr-6">Hire Me</button>
          <button className="btn-pro-max">Let&apos;s Talk</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;