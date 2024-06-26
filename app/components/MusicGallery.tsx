import { useState } from "react";
import SoundCloudPlayer from "./SoundCloudPlayer";
import tracks, { Track } from '~/data/tracks';
import TrackSelector from "./TrackSelector";

export default function MusicGallery() {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);

  function onTrackSelected(selectedTrack: Track): void {
    setCurrentTrack(selectedTrack);
  }

  return (
    <div className='flex flex-col gap-2 mt-4 overflow-y-auto'>
      <SoundCloudPlayer trackId={currentTrack.trackId} trackName={currentTrack.trackName} />
      <div className='flex basis-full flex-wrap justify-center py-2 gap-2'>
        {tracks.map(track =>
          <TrackSelector key={track.trackId} track={track} currentTrack={currentTrack} onTrackSelected={onTrackSelected} />
        )}
      </div>
    </div>
  )
}