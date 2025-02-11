import { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa6";
import { Link, useParams } from "react-router";

const Details = () => {
  const { id } = useParams(); // Get project ID from URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find((item) => item.id === parseInt(id));
        setProject(selectedProject);
      });
  }, [id]);

  if (!project) {
    return <div className="text-center text-white text-xl">Loading...</div>;
  }

  return (
    <div className="w-11/12 mx-auto pt-24 py-10">
      <div className="card shadow-lg border border-cyan-400 p-6">
        <div className="btn-pro-max text-sm my-4">  <Link to={'/'}
          className="flex items-center justify-center gap-2"> Back </Link></div>
       

      <figure>
        <img src={project.image} alt={project.project_Name} className="w-full h-72 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">{project.project_Name}</h2>
        <p className="text-lg">{project.description}</p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Tech Stack:</h3>
          <p>{project.technology}</p>
        </div>


        <div className="mt-4">
          <h3 className="text-xl font-semibold">Challenges Faced:</h3>
          <p>{project.challenges}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Future Improvements:</h3>
          <p>{project.future_plans}</p>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="btn-pro text-sm ">  <Link target="_blank" to={project.live}
            className="flex items-center gap-2">Live Project  <FaLink /></Link></div>
          <div className="btn-pro-max text-sm ">  <Link target="_blank" to={project.client}
            className="flex items-center gap-2"> GitHub Repo  <FaGithub /></Link></div>


        </div>

      </div>
      
    </div>
    </div>

  );
};

export default Details;
