

const About = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="hero my-16">
        <div className="flex justify-between items-center gap-12 flex-col lg:flex-row">
          <img
            src="https://i.ibb.co.com/7x0dcdZS/nahid-removebg-preview.png"
            className="rounded-lg w-84 bg-lime-300" />
          <div>
            <h1 className="text-5xl text-white font-bold">About <span className="span-color">Me!</span></h1>
            <p className="py-6 text-white">
            Hello, I&apos;m a web designer and Developer passionate about web coding,
            problem-solving, and continuous learning . With 2 year of experience, I specialize in HTML5, CSS3, Tailwind CSS, JavaScript, React, Node JS, MongoDB, Fire Base, Express JS  and converting designs from PSD, XI, XD, Figma and AI to stunning HTML. I also create responsive web designs. If you need help with web design projects, feel free to reach out. I&apos;ll work dedicatedly and make adjustments until you&apos;re completely satisfied. I take pride in delivering quality and ensuring client satisfaction . Your project is in good hands..Thank you..
            </p>
          
          <div className="">
          <button className="btn btn-primary mr-6">Hire Me</button>
          <button className="btn btn-primary btn-outline">Let&apos;s Talk</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;