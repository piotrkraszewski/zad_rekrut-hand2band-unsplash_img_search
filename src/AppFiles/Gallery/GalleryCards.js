import { useContext } from 'react'
import '../../styles/main.scss'
import { AppContext } from '../Contexts/AppContext'
import { NOT_FOUND_POSTER_W500 } from '../../utilities/Consts'
import no_image from '../../images/no_image.png'


export default function GalleryCards() {
  const {searchbarText, imagesData, setMovieID} = useContext(AppContext)

  return (
    <div className='galleryCards'>

    <div className='container'>
      <p className='title'>
        {searchbarText}
      </p>
      <div className='row'>

        {imagesData.map((item, index) => 
          <div 
            className='smallCard col-xl-2 col-md-3 col-4' 
            key={index}
          >
            <div onClick={() => setMovieID(item[1])}>
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
          </div>
        )}
        
      </div>
    </div>

  </div>
  )
}