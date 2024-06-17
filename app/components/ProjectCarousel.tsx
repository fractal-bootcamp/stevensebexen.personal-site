import { Project } from "~/data/projects";
import ProjectCarouselTile from "./ProjectCarouselTile";
import { useRef, useState } from "react";

interface ProjectCarouselProps {
  projects: Project[];
  onProjectSelected: (projectId: Project) => void;
}
export default function ProjectCarousel(props: ProjectCarouselProps) {
  return (
    <div className='flex flex-col gap-2 overflow-y-clip' onScroll={() => console.log('scroll')}>
      {props.projects.map(project => <ProjectCarouselTile key={project.id} project={project} onProjectSelected={props.onProjectSelected} />
      )}
    </div>
  )
}