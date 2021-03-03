import GalleryCards from './GalleryCards'
import GallerySearchbar from './GallerySearchbar'
import { motion } from "framer-motion"
import AppScroolbar from '../../utilities/Scroolbar/AppScrollbar'

export default function Gallery() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 
      <AppScroolbar>
        <GallerySearchbar />
        <GalleryCards />
      </AppScroolbar>
    </motion.div> 
  )
}