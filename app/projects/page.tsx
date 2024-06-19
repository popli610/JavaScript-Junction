import React from "react";
import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  level: "Easy" | "Medium" | "Advanced";
  link: string;
  image: string;
}

const projectsData: Project[] = [
  {
    title: "Project 1",
    description: "This is a description for Project 1.",
    level: "Easy",
    link: "#",
    image: "/images/project1.png",
  },
  {
    title: "Project 2",
    description: "This is a description for Project 2.",
    level: "Medium",
    link: "#",
    image: "/images/project1.png",
  },
  {
    title: "Project 3",
    description: "This is a description for Project 3.",
    level: "Advanced",
    link: "#",
    image: "/images/project1.png",
  },
  {
    title: "Project 1",
    description: "This is a description for Project 1.",
    level: "Easy",
    link: "#",
    image: "/images/project1.png",
  },
  {
    title: "Project 2",
    description: "This is a description for Project 2.",
    level: "Medium",
    link: "#",
    image: "/images/project1.png",
  },
  {
    title: "Project 3",
    description: "This is a description for Project 3.",
    level: "Advanced",
    link: "#",
    image: "/images/project1.png",
  },
];

const page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col flex-wrap px-10 py-5 text-textColor">
      <div className=" flex justify-center text-7xl p-24">
        <h1> JAVASCRIPT JUNCTION</h1>
      </div>
      <div className="flex justify-center space-x-4 mb-10">
        <button className=" border text-lg  hover:bg-textColor hover:text-black rounded-full  px-7 py-2  ">
          Easy
        </button>
        <button className=" hover:bg-green-600 py-2 px-4 rounded">
          Medium
        </button>
        <button className=" hover:bg-purple-600  py-2 px-4 rounded">
          Advanced
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div key={index} className="flex justify-center">
            <ProjectCard
              title={project.title}
              description={project.description}
              level={project.level}
              link={project.link}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
