import { MouseEventHandler } from "react";

import Project from "~/interfaces/Project";

interface ProjectListTileProps {
  project: Project
  onClick: () => void
}

export default function ProjectListTileInactive(props: ProjectListTileProps) {
  return (
    <div className="flex flex-1 h-full bg-slate-400/50 p-2 opacity-50 cursor-pointer hover:bg-slate-600/50 overflow-clip hidden sm:block" onClick={() => props.onClick()}>
      <p className="flex-0 text-center">{props.project.name}</p>
      <img className="max-h-1/2 object-cover aspect-video" src={props.project.imgUrl} alt={props.project.imgAlt}></img>
      <p className="flex-0 basis-1/4">{props.project.description}</p>
    </div>
  );
}