interface ArtGalleryProps {
  imageUrls: string[] | undefined
}
export default function ArtGallery(props: ArtGalleryProps) {
  return (
    <>
    <div className = 'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-2 overflow-y-auto'>
      {props.imageUrls?.map(url =>
          <img key={url} src={url} className='object-cover rounded-md aspect-square' />
      )}
    </div>
    </>
  )
}