/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './styles/main.scss'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { AppContext } from './AppFiles/Contexts/AppContext'
import AppScroolbar from './utilities/Scroolbar/AppScrollbar'
import { getImagesData, getAutoComplete } from './utilities/FetchFunctions'
import { getSearchIdFromLocationPathname, getCurrentPageUrl } from './utilities/RoutesFunctions'
import CalculateWindowHeightHook from './utilities/CalculateWindowHeightHook'
import Gallery from './AppFiles/Gallery/Gallery'
import StartPage from './AppFiles/StartPage'


export default function App () {
  const location = useLocation()  // key to app routes
  const history = useHistory()
  const pushToHistory = url => history.push(url)


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
    console.log(searchID)
  }, [searchID])

  // implements back button in browser
  useEffect(() => {
    setSearchID(getSearchIdFromLocationPathname(location))
  }, [location.pathname])
  
// ==== END Fetch Images Data ====


// ==== Searchbar State ====
// przydaloby sie zmienic nazwe na suggestions
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


// ==== Console log stuff ====
  useEffect(() => {
    console.log(imagesData)
  }, [imagesData])
// ==== END Console log stuff ====


  return (
    <div>
      <CalculateWindowHeightHook/>
      <AppContext.Provider 
        value={{searchID, searchbarText, setSearchbarText, oldSearchbarText, setOldSearchbarText, onSearchbarTextChanging, imagesData, setSearchID, showResInSearchBar, pushToHistory, suggestions, showSuggestions, setShowSuggestions, hoveredSuggestionIdx, setHoveredSuggestionIdx}}
      >
        <AppScroolbar>
          <AnimatePresence exitBeforeEnter>
            <Switch 
              location={location} 
              key={getCurrentPageUrl(location)}
            >
              <Route exact path='/' render={() => <StartPage/>} />
              <Route exact path={`/s/:${searchID}`} render={() => <Gallery/>} />
            </Switch>
          </AnimatePresence>
        </AppScroolbar>
      </AppContext.Provider>
    </div>
  )
}