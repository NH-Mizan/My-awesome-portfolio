// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { useEffect, useState } from "react";
import { Link } from "react-router";


const Projects = () => {
    const [projects,setProjects] =useState([])
    useEffect(()=>{
    fetch('/public/projects.json')
    .then(res=> res.json())
    .then(data => setProjects(data))
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-center my-8 text-5xl text-white font-bold">Protfolio  <span className="span-color"></span></h1>
            <div className=" text-center ">
                {/* <Tabs >
                    <TabList className='flex gap-6 '>
                        <Tab> <button>All</button></Tab>
                        <Tab><button>Website</button></Tab>
                        <Tab><button>ddd</button></Tab>
                    </TabList>

                    <TabPanel className="mt-12">
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs> */}


                {/* card */}
                {
                    projects?.map((project) =>(
                        <div key={project.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.project_Name}</h2>
                           
                            <div className="card-actions justify-end">
                                <Link to={'/details/'} className="btn btn-primary">view More</Link>
                            </div>
                        </div>
                    </div>
                    ))
                }
               



            </div>



        </div>
    );
};

export default Projects;