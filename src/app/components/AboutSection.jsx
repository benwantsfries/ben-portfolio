"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Unity / C#</li>
        <li>Python</li>
        <li>Premiere Pro</li>
        <li>Photoshop</li>
        <li>Blender</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Digital Screens</li>
        <li>University of Canterbury, Christchurch</li>
      </ul>
    ),
  },
  {
    title: "Passions",
    id: "Interests",
    content: (
      <ul className="list-disc pl-2">
        <li>Game Design</li>
        <li>Video Editing</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Some Stuff About Me</h2>
          <p className="text-base lg:text-lg">
            I am an aspiring game developer that is still developing his
            creative voice. I have experience working with Unity, Photoshop,
            Premiere Pro, and Blender. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I work well in a 
            team setting and I am excited to work with other developers of 
            today, and the veterans in the space.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Interests")}
              active={tab === "Interests"}
            >
              {" "}
              Core Passions{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
