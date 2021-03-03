
import Searchbar from './Searchbar/Searchbar'
import BG_Unsplash from '../images/BG_Unsplash.jpg'
import { motion } from 'framer-motion'

export default function Movie () {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='startPage'>
        <div className='row container'>
          <h1>Unsplash</h1>
          <p>
            The internet's source of&nbsp;
            <a href='https://unsplash.com/license'>
              freely-usable images
            </a>
            <br />
            Powered by creators everywhere.
          </p>
          
          <Searchbar />
        </div>
      </div>

      <img 
        className='BgImage'
        src={BG_Unsplash}
        alt='background_image'
      />
    </motion.div>
  )
}