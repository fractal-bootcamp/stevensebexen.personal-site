import { Track } from "~/data/tracks"

interface TrackSelectorProps {
  track: Track
  currentTrack: Track;
  onTrackSelected: (track: Track) => void
}
export default function TrackSelector(props: TrackSelectorProps) {
  const backgroundStyle = props.track.trackId === props.currentTrack.trackId ? 'bg-[#ffffffa0]' : 'bg-[#ffffff44] hover:bg-[#ffffff88]'

  return (
    <div className={['flex basis-36 md:basis-52 h-16 cursor-default rounded-md justify-center items-center text-center', backgroundStyle].join(' ')}
    onClick={() => props.onTrackSelected(props.track)}
    >
      {props.track.trackName}
    </div>
  )
}