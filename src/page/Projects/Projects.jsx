import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

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

  if (loading) return <p className="text-center text-white">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div id="portfolio" className="w-11/12 mx-auto py-10">
      <h1 className="text-center my-8 text-5xl text-white font-bold">
        <span className="span-color">MY</span> PORTFOLIO
      </h1>

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
            className="card shadow-lg border border-[#61557c] shadow-[#61557c] p-2 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <figure className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.project_Name}
                className="w-full h-56 object-cover"
                whileHover={{ scale: 1.1 }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{project.project_Name}</h2>
              <p>{project.description}</p>

              <div className="card-actions justify-end">
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
