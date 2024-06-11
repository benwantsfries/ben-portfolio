"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chopped (VR)",
    description: "A Rythm Game with a Lumberjack Theme - Solo Project",
    image: "/images/projects/1.png",
    tag: ["All", "Game Projects"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "The Whispers From Floor 25 (VR)",
    description: "A Vr Escape Room experience - Duo Project",
    image: "/images/projects/2.png",
    tag: ["All", "Game Projects"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "DictatorShips (2D)",
    description: "A Comedic Dating Simulator - Group Project",
    image: "/images/projects/3.png",
    tag: ["All", "Game Projects"],
    previewUrl: "https://benwantsfries.itch.io/dictatorships",
  },
  {
    id: 4,
    title: "DicatorShips - Trailer",
    description: "The trailer I put together for our game",
    image: "/images/projects/4.png",
    tag: ["All", "Editing Projects"],
    previewUrl: "https://youtu.be/00WpUi4ct7o?si=729aqNgeMkia4xNh",
  },
  {
    id: 5,
    title: "Youtube Channel",
    description: "A place where I practice video editing",
    image: "/images/projects/5.png",
    tag: ["All", "Editing Projects"],
    previewUrl: "https://www.youtube.com/@DuckyDota/videos",
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "My next big thing!",
    image: "/images/projects/6.png",
    tag: ["All", "Editing Projects", "Game Projects"],
    previewUrl: "https://benji-portfolio.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Some Cool Stuff I made!
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game Projects"
          isSelected={tag === "Game Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Editing Projects"
          isSelected={tag === "Editing Projects"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
