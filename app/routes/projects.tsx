import { Link } from "@remix-run/react";
import { useState } from "react";
import ProjectCarousel from "~/components/ProjectCarousel";

import projects, { Project } from '~/data/projects';

export default function Projects () {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();

  return (
    <div className='flex flex-col py-16 bg-gradient-to-t from-[#e76443] to-[#f9b175] h-screen w-screen place-items-center place-content-center'>
      <div className='flex flex-1 w-3/4 max-w-[1024px] py-4 bg-[#ffffff88] min-h-full items-center'>
        <div className='flex px-4 flex-col flex-1 basis-1/3 justify-start self-stretch'>
          <Link className='flex-0 text-2xl pr-4' to="/">
            {'<'}
            <h1 className='flex-1 pl-4 inline'>my projects.</h1>
          </Link>
          <div className='flex-1 flex-col basis-full overflow-y-auto content-center'>
            <ProjectCarousel projects={projects} onProjectSelected={(project: Project) => { setSelectedProject(project); }} />
          </div>
        </div>
        <div className='border-l-2 border-[#782112] h-4/5' />
        <div className='flex flex-1 flex-col gap-12 basis-2/3 px-4 self-stretch'>
          <h2 className='text-4xl'>{selectedProject?.name}</h2>
          <p className='text-md'>{selectedProject?.longDescription}</p>
        </div>
      </div>
    </div>
  )
}