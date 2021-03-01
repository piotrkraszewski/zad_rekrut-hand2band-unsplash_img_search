import { useContext } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import '../../styles/main.scss'
import { AppContext } from '../Contexts/AppContext'
import { NOT_FOUND_POSTER_W500 } from '../../utilities/Consts'
import no_image from '../../images/no_image.png'


export default function GalleryCards() {
  const { imagesData, searchID} = useContext(AppContext)

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
            // onClick={() => setMovieID(item[1])}
          >
            <img // implement error handeling here or delete
              src={item.regularImgQuality !== NOT_FOUND_POSTER_W500 
                ? item.regularImgQuality 
                : no_image}
              alt={`poster ${item.id}`}
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

    </div>
  )
}