import Link from 'next/link';
import Image from 'next/image';

import { ExperienceCard } from './components/experience/ExperienceCard.tsx'
import { ProjectCard } from './components/projects/ProjectCard.tsx'
import { BlogCard } from './components/blogs/BlogCard.tsx'
import { Donut } from './components/world/World.tsx'

import './globals.css';

import { experience, projects, blogs, social } from './data/data.js';

export default function Home() {
  return (
    <main className=' gap-4 text-[#fafafaf8] w-full '>
      <section className=' lg:pt-24 lg:py-24 flex flex-col top-0  lg:h-screen'>
        <div>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <h1 className='opacity-90 text-[#fafafaf8] text-5xl font-semibold'>Matthew Guillén</h1>
            <h2 className='text-1xl font-medium tracking-tight text-slate-200 sm:text-xl'>Frontend Engineer & Product Developer</h2>
            <p className='w-2/3 scroll-mt-16 text-slate-400 lg:scroll-mt-24 text-'>
              {`Software engineer specialized in front-end development with almost 4 years of experience in web applications. Passionate about intuitive interfaces and robust security practices. Before programming, `}
              <Link className='transition-colors duration-200 ease-in-out font-medium text-slate-200 hover:text-[#7167ff] focus-visible:text-[#9891fb]' href='https://www.figma.com/@matthewvogas'>
                I used to design a lot in Figma,
              </Link>
              {` so I have the perfect pixel eye for interfaces. `}
              <Link className='transition-colors duration-200 ease-in-out font-medium text-slate-200 hover:text-[#7167ff] focus-visible:text-[#9891fb]' href='mailto:mvttheo@outlook.com'>
                {`Let's chat.`}
              </Link>
            </p>

          </div>
          <Donut />
        </div>
      </section>
      <section className=' lg:pt-24 lg:py-24 w-full '>
        <div className="relative z-0 hover-opacity-others grid grid-cols-1 gap-4">
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
        <Link className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-24 custom-underline' href={'/resume.pdf'}>View Full Resume</Link>
        <div className="relative z-0 hover-opacity-others grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div className="child" key={index}>
              <ProjectCard name={project.name} description={project.description} image={project.image} items={project.items} url={project.url} />
            </div>
          ))}
        </div>
        <div className='mt-12 flex flex-row justify-center gap-4 pt-6 lg:mt-0 mb-12 lg:mb-0'>
          {social.map((social, index) => (
            <Link
              target='_blank'
              href={social.url}
              key={index}
              className='opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in-out'
            >
              <Image
                className='max-w-6'
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}

        </div>
        <p className='flex justify-center w-full opacity-65'>Thanks for reaching out</p>
      </section>
    </main>
  );
}
