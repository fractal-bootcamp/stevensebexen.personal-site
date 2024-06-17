import SoundCloudPlayer from "./SoundCloudPlayer";

export default function MusicGallery() {
  return (
    <div className='flex flex-col gap-2 mt-4 overflow-y-auto'>
      <SoundCloudPlayer trackId="1850246913" trackName="Son of a Gun" />
      <SoundCloudPlayer trackId="352624088" trackName="I3U" />
      <SoundCloudPlayer trackId="331463550" trackName="Open My Veins" />
      <SoundCloudPlayer trackId="404833974" trackName="Roots of Decay" />
      <SoundCloudPlayer trackId="383319215" trackName="Rising Stars" />
      <SoundCloudPlayer trackId="405014886" trackName="Through Changing Times" />
    </div>
  )
}