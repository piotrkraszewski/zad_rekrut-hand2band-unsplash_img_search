import { useState, useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import '../../styles/main.scss'
import { AppContext } from '../Contexts/AppContext'
import SingleImage from './SingleImage'
import GotoOtherRoutesHooks from '../Hooks/GotoOtherRoutesHooks'


export default function GalleryCards() {
  const { imagesData, searchID } = useContext(AppContext)
  const [searchImages] = GotoOtherRoutesHooks()
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [openImageID, setOpenImageID] = useState()

  const openSingleImage = (e, id) => {
    setOpenImageID(id)
    setIsImageOpen(true)
  }

  return (
    <div className='galleryCards'>

    <AnimatePresence exitBeforeEnter>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        key={searchID}
      > 
        <p className='title'>{searchID}</p>
        <ResponsiveMasonry
          columnsCountBreakPoints={{475: 1, 575: 2, 1000: 3, 1800: 4}}
        >
          <Masonry>
          {imagesData.map((item) => 
          <div 
            className='cardContainer'
            key={item.id} 
          >
            <div className='Card'>
              <img
                src={item.regularImgQuality}
                className={item.tags.length === 0 && 'roundCorners'}
                alt={`poster ${item.id}`}
                onClick={e => openSingleImage(e, item.id)}
              />
              <div>
                {item.tags.map((tag, index) => 
                  <div key={`${item.id}-${index}`} 
                    onClick={() => searchImages(tag)}>
                    <p>{tag}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          )}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div> 
    </AnimatePresence>

    <SingleImage
      open={isImageOpen} 
      onClose={() => setIsImageOpen(false)}
      id={openImageID} 
    />

  </div>
  )
}