interface ArtGalleryProps {
  imageUrls: string[] | undefined
}
export default function ArtGallery(props: ArtGalleryProps) {
  return (
    <>
    <div className = 'flex flex-row flex-wrap justify-between'>
      {props.imageUrls?.map(url =>
        <div className='p-8 flex-1 basis-1/4'>
          <img src={url} className='object-scale-down rounded-xl max-h-[250px]' />
        </div>
      )}
    </div>
    </>
  )
}