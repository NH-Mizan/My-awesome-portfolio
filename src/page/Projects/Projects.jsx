import { useEffect, useState } from "react";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="portfolio" className="w-11/12 mx-auto py-10">
      <h1 className="text-center my-8 text-5xl text-white font-bold">
        <span className="span-color">MY</span> PORTFOLIO
      </h1>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card shadow-lg border border-cyan-400 hover:shadow-xl p-2 transition-all"
          >
            <figure>
              <img
                src={project.image}
                alt={project.project_Name}
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{project.project_Name}</h2>

              <div className="card-actions justify-end">
                <Link to={`/details/${project.id}`} className="btn-pro-max ">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
