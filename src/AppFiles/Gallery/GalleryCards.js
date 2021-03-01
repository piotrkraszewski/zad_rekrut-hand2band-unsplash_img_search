import { useContext } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import '../../styles/main.scss'
import { AppContext } from '../Contexts/AppContext'
import { NOT_FOUND_POSTER_W500 } from '../../utilities/Consts'
import no_image from '../../images/no_image.png'


export default function GalleryCards() {
  const {searchbarText, imagesData, setMovieID} = useContext(AppContext)

  return (
    <div className='galleryCards'>

      <p className='title'>
        {searchbarText}
      </p>
      <ResponsiveMasonry
        columnsCountBreakPoints={{475: 1, 575: 2, 1000: 3, 1800: 4}}
      >
        <Masonry>
        {imagesData.map((item, index) => 
          <div 
            className='Card' 
            key={index} 
            onClick={() => setMovieID(item[1])}
          >
            <img 
              src={item.regularImgQuality !== NOT_FOUND_POSTER_W500 
                ? item.regularImgQuality 
                : no_image}
              alt={`poster ${index}`}
            />
            {item.tags.map(tag => 
              <p>{tag}</p>
            )}
          </div>
        )}
        </Masonry>
      </ResponsiveMasonry>

    </div>
  )
}