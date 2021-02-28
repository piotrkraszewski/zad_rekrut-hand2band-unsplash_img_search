/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './styles/main.scss'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { AppContext } from './AppFiles/Contexts/AppContext'
import AppScroolbar from './utilities/Scroolbar/AppScrollbar'
import { getImagesData, getQueryData, getMovieData, createPictureSearchUrl, setInitMovieID, getAutoComplete } from './utilities/FetchFunctions'
import { getMovieIdFromLocationPathname } from './utilities/RoutesFunctions'
import CalculateWindowHeightHook from './utilities/CalculateWindowHeightHook'
import Gallery from './AppFiles/Gallery/Gallery'
import StartPage from './AppFiles/StartPage'


export default function App () {
  const location = useLocation()  // key to app routes
  const history = useHistory()
  const pushToHistory = url => history.push(url)


// ==== Fetch movie page based on movieID parameter ====
  const [movieID, setMovieID] = useState(setInitMovieID(location))
  const [movieData, setMovieData] = useState({})
  
  // useEffect(async () => {
  //   setMovieData(await getMovieData(movieID))
  // }, [movieID])

  // implements back button in browser
  // allows to go back to previous movie on moviePage
  // useEffect(() => {
  //   setMovieID(getMovieIdFromLocationPathname(location))
  // }, [location.pathname])
  
// ==== END Fetch movie page ====


// ==== Fetch all Movies Data ====
// suggestion to tu byly tylko fragmenty danych wyselekcjonowane
  const [suggestions, setSuggestions] = useState([])
  const [allMoviesData, setAllMoviesData] = useState([])

  const search = async (value) => {
    const imagesData = await getImagesData(value)
    console.log(imagesData)
  }
// ==== END Fetch all Movies Data ====


// ==== Searchbar State ====
// przydaloby sie zmienic nazwe na suggestions
  const [searchbarText, setSearchbarText] = useState('')
  const [oldSearchbarText, setOldSearchbarText] = useState('')
  const [autoCompltions, setAutoCompltions] = useState([])
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
      setAutoCompltions(await getAutoComplete(value))
      setOldSearchbarText(value)
    }
  }
// ==== END Searchbar State ====


// ==== Console log stuff ====
  // useEffect(() => {
  //   console.log(`allMoviesData.length ${allMoviesData.length}`)
  //   console.log(`suggestions.length ${allMoviesData.length}`)
  // }, [allMoviesData])

  // useEffect(() => {
  //   console.log({suggestions})
  // }, [suggestions])

  // useEffect(() => {
  //   console.log({movieData})
  // }, [movieData])

  // useEffect(() => {
  //   console.log(`searchbarText: ${searchbarText}`)
  // }, [searchbarText])

// ==== END Console log stuff ====



  return (
    <div>
      <CalculateWindowHeightHook/>
      <AppContext.Provider 
        value={{movieID, movieData, searchbarText, setSearchbarText, oldSearchbarText, setOldSearchbarText, suggestions, setSuggestions,  onSearchbarTextChanging, allMoviesData, setAllMoviesData, setMovieID, showResInSearchBar, history, pushToHistory, autoCompltions, showSuggestions, setShowSuggestions, hoveredSuggestionIdx, setHoveredSuggestionIdx, search}}
      >
        <AppScroolbar>
          <AnimatePresence exitBeforeEnter>
            <Switch 
              location={location} 
              key={location.key}
            >
              <Route exact path='/' render={() => <StartPage/>} />
              <Route exact path={`/:${movieID}`} render={() => <Gallery/>} />
            </Switch>
          </AnimatePresence>
        </AppScroolbar>
      </AppContext.Provider>
    </div>
  )
}