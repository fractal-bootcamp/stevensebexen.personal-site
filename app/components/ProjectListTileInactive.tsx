import { MouseEventHandler } from "react";

import Project from "~/interfaces/Project";

interface ProjectListTileProps {
  project: Project
  onClick: () => void
}

export default function ProjectListTileInactive(props: ProjectListTileProps) {
  return (
    <div className="h-64 bg-slate-400/50 opacity-50 cursor-pointer hover:bg-slate-600/50" onClick={() => props.onClick()}>
      <p className="text-center">{props.project.name}</p>
      <img className="mx-auto h-1/2" src={props.project.imgUrl} alt={props.project.imgAlt}></img>
      <p>{props.project.description}</p>
    </div>
  );
}