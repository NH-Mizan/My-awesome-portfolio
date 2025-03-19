import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects.");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-lg text-white animate-pulse">Loading projects...</p>;
  
  if (error)
    return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div id="portfolio" className="w-11/12 mx-auto py-10">
      <h1 className="text-center my-8 text-5xl text-white font-bold">
        <span className="span-color">MY</span> PORTFOLIO
      
      </h1>
      <h2 className="font-semibold text-2xl flex  my-8"><img src="https://i.ibb.co.com/StHFBM7/Group.png"className="w-8 mr-4"alt="" /> Showcase of my  <span className="font-semibold text-2xl ml-4 bg-gradient"> 
      <Typewriter
                                        words={[" latest projects  🖥 "," and", "creative work💻 ", ]}
                                        loop={false}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
        
         </span></h2>
    

      {/* Project Cards */}
      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="card shadow-lg border border-[#61557c] shadow-[#61557c] p-4 rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <figure className="overflow-hidden rounded-lg">
              <motion.img
                src={project.image}
                alt={project.project_Name}
                className="w-full h-56 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </figure>
            <div className="card-body text-white mt-3">
              <h2 className="card-title text-xl font-bold">{project.project_Name}</h2>
              <p>{project.description}</p>

              <div className="card-actions justify-end mt-2">
                <Link to={`/details/${project.id}`} className="btn-pro-max">
                  View More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
