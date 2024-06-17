import { useRef } from "react";
import { Project } from "~/data/projects"

interface ProjectCarouselTileProps {
  project: Project;
  onProjectSelected: (project: Project) => void;
}
export default function ProjectCarouselTile(props: ProjectCarouselTileProps) {
  return (
    <div className='flex flex-row flex-0 basis-1/3 items-center border border-[#f7dcd2] rounded-md bg-[#ffffff44]' onClick={() => props.onProjectSelected(props.project)}>
      <div className='flex flex-0 w-8 h-8 text-sm justify-center items-center'>
        img
      </div>
      <div className='flex flex-col p-2 flex-1 basis-2/3 h-20 overflow-clip'>
        <h2 className='text-lg'>{props.project.name}</h2>
        <p className='text-sm'>{props.project.shortDescription}</p>
      </div>
    </div>
  );
}