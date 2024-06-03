import Project from "~/interfaces/Project";

interface ProjectListTileProps {
  project: Project
}

export default function ProjectListTileInactive(props: ProjectListTileProps) {
  return (
    <div className="h-64 bg-slate-400/50 opacity-50">
      <p className="text-center">{props.project.name}</p>
      <img className="mx-auto h-1/2" src={props.project.imgUrl}></img>
      <p>{props.project.description}</p>
    </div>
  );
}