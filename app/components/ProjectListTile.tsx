import Project from "~/interfaces/Project";

interface ProjectListTileProps {
  project: Project
}

export default function ProjectListTile(props: ProjectListTileProps) {
  return (
    <a className="text-black" href={props.project.projectUrl}>
      <div className="h-64 bg-slate-400/50 hover:bg-slate-400/75">
        <p className="text-center">{props.project.name}</p>
        <img className="mx-auto h-1/2" src={props.project.imgUrl} alt={props.project.imgAlt}></img>
        <p>{props.project.description}</p>
      </div>
    </a>
  );
}