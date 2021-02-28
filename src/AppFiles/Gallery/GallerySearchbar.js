import '../../styles/main.scss'
import Searchbar from '../Searchbar/Searchbar'

export default function GallerySearchbar() {
  return (
    <div className='col-lg-6 col-md-8 col-sm-9 col-12 gallerySearchbar'>
      <div className='row'>
        <Searchbar/>
      </div>
    </div>
  )
}