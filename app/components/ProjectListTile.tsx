import Project from "~/interfaces/Project";

interface ProjectListTileProps {
  project: Project
}

export default function ProjectListTile(props: ProjectListTileProps) {
  return (
    <a className="flex flex-1 h-full text-black" href={props.project.projectUrl}>
      <div className="flex flex-col flex-1 bg-slate-400/50 hover:bg-slate-400/75 overflow-clip p-2 justify-start">
        <p className="flex-0 text-center">{props.project.name}</p>
        <img className="max-h-1/2 object-cover aspect-video" src={props.project.imgUrl} alt={props.project.imgAlt}></img>
        <p className='flex-1'>{props.project.description}</p>
      </div>
    </a>
  );
}