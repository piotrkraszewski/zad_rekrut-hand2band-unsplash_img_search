import { useState, useEffect } from 'react'
import './styles/main.scss'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { AppContext } from './AppFiles/Contexts/AppContext'

import { getImagesData, getAutoComplete } from './utilities/FetchFunctions'
import { getSearchIdFromLocationPathname, getCurrentPageUrl } from './utilities/RoutesFunctions'
import CalculateWindowHeightHook from './utilities/CalculateWindowHeightHook'
import Gallery from './AppFiles/Gallery/Gallery'
import StartPage from './AppFiles/StartPage'


export default function App () {
  const location = useLocation()  // key to app routes

// ==== Fetch Images Data ====
  const [imagesData, setImagesData] = useState([])
  const [searchID, setSearchID] = useState(getSearchIdFromLocationPathname(location))

  // Tracks current searchID to fetch page when user types url
  useEffect(() => {
    const getImages = async (value) => {
      if(value.length > 0)
        setImagesData(await getImagesData(value))
    }
    getImages(searchID)
  }, [searchID])

  // implements back button in browser
  useEffect(() => {
    setSearchID(getSearchIdFromLocationPathname(location))
  }, [location.pathname])

// ==== END Fetch Images Data ====


// ==== Searchbar State ====
  const [searchbarText, setSearchbarText] = useState('')
  const [oldSearchbarText, setOldSearchbarText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [hoveredSuggestionIdx, setHoveredSuggestionIdx] = useState()

  const onSearchbarTextChanging = e => {
    const value = e.target.value.replace(/[^\w\s]/gi, '')
    setSearchbarText(value)
    showResInSearchBar(value)
  }

  const showResInSearchBar = async (value) => {
    if (value.length === 0) setOldSearchbarText('')
    if (value.length >= 3) {
      setSuggestions(await getAutoComplete(value))
      setOldSearchbarText(value)
    }
  }
// ==== END Searchbar State ====

  return (
    <div>
      <CalculateWindowHeightHook/>
      <AppContext.Provider
        value={{searchID, searchbarText, setSearchbarText, oldSearchbarText, setOldSearchbarText, onSearchbarTextChanging, imagesData, setSearchID, showResInSearchBar, suggestions, showSuggestions, setShowSuggestions, hoveredSuggestionIdx, setHoveredSuggestionIdx}}
      >
          <AnimatePresence exitBeforeEnter>
            <Switch
              location={location}
              key={getCurrentPageUrl(location)}
            >
              <Route exact path='/' render={() => <StartPage/>} />
              <Route exact path={`/s/:${searchID}`} render={() => <Gallery/>} />
            </Switch>
          </AnimatePresence>
      </AppContext.Provider>
    </div>
  )
}