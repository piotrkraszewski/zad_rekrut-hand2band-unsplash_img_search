import { useState, useContext } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import '../../styles/main.scss'
import { AppContext } from '../Contexts/AppContext'
import { NOT_FOUND_POSTER_W500 } from '../../utilities/Consts'
import no_image from '../../images/no_image.png'
import SingleImage from './SingleImage'


export default function GalleryCards() {
  const { imagesData, searchID} = useContext(AppContext)
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [openImageID, setOpenImageID] = useState()

  const openSingleImage = (e, id) => {
    e.preventDefault()
    console.log(id)
    setOpenImageID(id)
    setIsImageOpen(true)
  }


  return (
    <div className='galleryCards'>

      <p className='title'>
        {searchID}
      </p>
      <ResponsiveMasonry
        columnsCountBreakPoints={{475: 1, 575: 2, 1000: 3, 1800: 4}}
      >
        <Masonry>
        {imagesData.map((item) => 
        <div className='cardContainer'>
          <div 
            className='Card' 
            key={item.id} 
          >
            <img // implement error handeling here or delete
              src={item.regularImgQuality !== NOT_FOUND_POSTER_W500 
                ? item.regularImgQuality 
                : no_image}
                className={item.tags.length === 0 && 'roundCorners'}
              alt={`poster ${item.id}`}
              onClick={e => openSingleImage(e, item.id)}
            />
            <div>
              {item.tags.map(tag => 
                <div>
                  <p>{tag}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        )}
        </Masonry>
      </ResponsiveMasonry>

      <SingleImage
        open={isImageOpen} 
        onClose={() => setIsImageOpen(false)}
        id={openImageID} 
      />

    </div>
  )
}