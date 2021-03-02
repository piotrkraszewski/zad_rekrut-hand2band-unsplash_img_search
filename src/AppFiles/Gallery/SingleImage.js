import { useContext } from 'react'
import '../../styles/main.scss'
import { AppContext } from '../Contexts/AppContext'
import { NOT_FOUND_POSTER_W500 } from '../../utilities/Consts'
import locationIcon from '../../images/pin.svg'
import { AnimatePresence, motion } from "framer-motion"

export default function SingleImage({open, onClose, id}) {
  const { imagesData } = useContext(AppContext)



  return (
    <AnimatePresence exitBeforeEnter>
    {open && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3}}
      >
        <div className='DarkerBG'/>
        <div className='SingleImage'>
          {imagesData.filter(item => item.id === id).map(img => (
          <div>
            <div className='header'>
              <div className='userData'>
                <img 
                  src={img.profile_image} 
                  alt="profile img"
                  />
                <div>
                  <p>{img.name}</p> 
                  <p className='username'>@{img.username}</p> 
                </div>
              </div>

              <div className='btnContainer'>
                <button 
                  className="btn btn-exit" 
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
              
            <img
              src={img.regularImgQuality}
              alt={`img ${img.id}`}
            />
            <div className='location'>
              {img.location &&
                <img
                  src={locationIcon}
                  alt='location img'
                />
              }
              <p>{img.location}</p>
              <p className='description'>{img.description}</p>
            </div>
          </div>
          ))}
          </div>
      </motion.div>)}
    </AnimatePresence>
  )
}