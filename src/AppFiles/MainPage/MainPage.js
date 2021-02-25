import { useState } from 'react'
import { MovieSearchbarContext } from '../Contexts/MovieSearchbarContext'
import MovieSearch from './MainPageSearch/MainPageSearch'
import BG_Unsplash from '../../images/BG_Unsplash.jpg'
import { motion } from "framer-motion"


export default function Movie() {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [hoveredSuggestionIdx, setIndexOfHighlightedMovie] = useState()

  return (
    <MovieSearchbarContext.Provider value={{ showSuggestions,  setShowSuggestions,  hoveredSuggestionIdx, setIndexOfHighlightedMovie}}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >    
        <MovieSearch />
        <img
          className='BgImage'
          src={BG_Unsplash}
          alt='background_image'
        />
      </motion.div>
    </MovieSearchbarContext.Provider>
  )
}