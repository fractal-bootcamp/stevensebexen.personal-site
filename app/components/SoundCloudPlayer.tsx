interface SoundCloudPlayerProps {
  trackId: string;
  trackName: string;
}
export default function SoundCloudPlayer(props: SoundCloudPlayerProps) {
  return (
    <div>
      <iframe width="100%" height="150" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}></iframe><div style={{ fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: 100, }}><a href="https://soundcloud.com/user-918053509" title="TheBoxDweller" target="_blank" style={{ color: "#9c4c60", textDecoration: "none" }}>TheBoxDweller</a> · <a href={`https://soundcloud.com/user-918053509/${props.trackName.toLowerCase().split(' ').join('-')}`} title={props.trackName} target="_blank" style={{ color: "#9c4c60", textDecoration: "none" }}>{props.trackName}</a></div>
    </div>
  );
}
