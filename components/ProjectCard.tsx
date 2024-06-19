import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  level: "Easy" | "Medium" | "Advanced";
  link: string;
  image: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  level,
  link,
  image
}) => {
  return (
    <Card className="max-w-lg bg-transparent text-white border border-gray-800 rounded-xl p-6 hover:bg-gray-900 hover:bg-opacity-70 hover:cursor-pointer transition-all duration-350 ease-in-out">
      <img
        src={image}
        alt={title}
        className=" h-64 w-full object-cover rounded-lg"
      />
      <CardHeader className="px-0">
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-500">
          Level: {level}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <p>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum repudiandae beatae sunt accusantium, cumque soluta quisquam
          iusto eaque nam. Error a velit nihil expedita ad dicta odio ab
          reprehenderit. Delectus?
        </p>
      </CardContent>
      <CardFooter className="flex px-0 justify-between text-black">
        <Button
          className="px-5 text-md rounded-lg"
          variant="outline"
          rel="noopener noreferrer"
        >
          View Code
        </Button>
        <Button
          className="px-5 text-md rounded-lg"
          variant="outline"
          rel="noopener noreferrer"
        >
          Visit Website
        </Button>
        <Button
          className="px-5 text-md rounded-lg"
          variant="outline"
          rel="noopener noreferrer"
        >
          What You Learn
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
