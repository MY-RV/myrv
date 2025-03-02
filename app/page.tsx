"use client";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

import { ExperienceCard } from "./components/experience/ExperienceCard.tsx";
import { ProjectCard } from "./components/projects/ProjectCard.tsx";
import { experience, projects, social } from "./data/data.js";
import { Donut } from "./components/world/World.tsx";

export default function Home() {
  return (
    <main className=" gap-4 text-[#fafafaf8] w-full ">
      <section className="flex mb-6 md:mb-0 flex-col top-0 border-b border-white/5 justify-center mt-12">
        <div className="px-6 md:px-0 flex flex-col gap-2 justify-center items-center">
          <h2 className="text-sm uppercase font-medium  text-[#41e36c]">
            Full-Stack Engineer & Product Developer
          </h2>
          <h1 className="mt-2 text-center opacity-90 text-[#f7fff9] text-5xl mb-2 font-semibold">
            Hi I&apos;m, Minor
          </h1>
          <p className="mt-3 text-center md:w-3/4 mr-4 scroll-mt-16 text-md text-[#e7feecca] lg:scroll-mt-24">
            {`I’m a goal-oriented full-stack developer with 4+ years of experience and a strong background in web development.   `}
            <Link
              className="transition-colors duration-200 ease-in-out font-medium text-[#9fecb0] hover:text-[#2ecd58] focus-visible:text-[#9891fb]"
              href="#experience"
            >
              {` I’m committed to continuous learning and delivering high-quality,
              scalable solutions.`}
            </Link>
            {` Known for problem-solving, adaptability, and driving project success as a reliable team player. `}
            <Link
              className="transition-colors duration-200 ease-in-out font-medium text-[#9fecb0] hover:text-[#2ecd58] focus-visible:text-[#9891fb]"
              href="mailto:mvttheo@outlook.com"
            >
              {`Let's chat.`}
            </Link>
          </p>
        </div>
        <div className="flex justify-center w-full">
          <Donut />
        </div>
      </section>
      <section id="experience" className="lg:pt-8 lg:py-24 w-full ">
        <div className="px-4 md:px-0 relative z-0 hover-opacity-others grid grid-cols-1 gap-4">
          {experience.map((experience, index) => (
            <div className="child" key={index}>
              <ExperienceCard
                startDate={experience.startDate}
                endDate={experience.endDate}
                name={experience.name}
                description={experience.description}
                stack={experience.stack}
                items={experience.items}
                url={experience.url}
              />
            </div>
          ))}
        </div>
        <Link
          className="px-4 md:px-0 mt-4 text-center text-lg font-medium  text-[#4bd268] sm:text-xl mb-14 md:mb-24 custom-underline"
          href={"/resume.pdf"}
        >
          View Full Resume
        </Link>
        <div className="px-4 md:px-0 relative z-0 hover-opacity-others grid grid-cols-1   sm:grid-cols-2 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div className="child" key={index}>
              <ProjectCard
                name={project.name}
                description={project.description}
                image={project.image}
                items={project.items}
                url={project.url}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <button className="mt-32 text-center text-lg font-medium  text-[#4bd268] sm:text-xl custom-underline">
            Thanks for reaching out _
          </button>
          <div className=" flex  justify-center gap-4 pt-6 lg:mt-0 mb-12 lg:mb-12 ">
            {social.map((social, index) => (
              <Link
                target="_blank"
                href={social.url}
                key={index}
                className="opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in-out"
              >
                <Image
                  className="max-w-6"
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
