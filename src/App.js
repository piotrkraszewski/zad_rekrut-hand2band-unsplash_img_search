/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './styles/main.scss'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { AppContext } from './AppFiles/Contexts/AppContext'
import AppScroolbar from './utilities/Scroolbar/AppScrollbar'
import { getMoviesDataToDisplayInSearch, getQueryData, getMovieData, createPictureSearchUrl, setInitMovieID, getAutoComplete } from './utilities/FetchFunctions'
import { getCurrentPageUrl, getMovieIdFromLocationPathname } from './utilities/RoutesFunctions'
import CalculateWindowHeightHook from './utilities/CalculateWindowHeightHook'
import StartPage from './AppFiles/StartPage/StartPage'
import MainPage from './AppFiles/MainPage/MainPage'


export default function App () {
  const location = useLocation()  // key to app routes
  const history = useHistory()
  const pushToHistory = url => history.push(url)


// ==== Fetch StartPage ====
  const [suggestions, setSuggestions] = useState([])
  const [searchbarText, setSearchbarText] = useState('')

// ==== END Fetch StartPage ====


// ==== Fetch movie page based on movieID parameter ====
  const [movieID, setMovieID] = useState(setInitMovieID(location))
  const [movieData, setMovieData] = useState({})
  
  useEffect(async () => {
    setMovieData(await getMovieData(movieID))
  }, [movieID])

  // implements back button in browser
  // allows to go back to previous movie on moviePage
  useEffect(() => {
    setMovieID(getMovieIdFromLocationPathname(location))
  }, [location.pathname])
  
// ==== END Fetch movie page ====

const [autoCompltions, setAutoCompltions] = useState([])

// ==== Search state and functions ====
  const [allMoviesData, setAllMoviesData] = useState([])
  const [oldSearchbarText, setOldSearchbarText] = useState('')


  const onSearchbarTextChanging = e => {
    const value = e.target.value.replace(/[^\w\s]/gi, '')
    setSearchbarText(value)
    showResInSearchBar(value)
  }

  const showResInSearchBar = async (value) => {
    if (value.length === 0) setOldSearchbarText('')
    if (value.length >= 3) {
      // const allMoviesData = await getQueryData(createPictureSearchUrl(value))
      // const dataToDisplay = await getMoviesDataToDisplayInSearch(allMoviesData)

      // setAllMoviesData(allMoviesData)
      // setSuggestions(dataToDisplay)

      setAutoCompltions(await getAutoComplete(value))
      // console.log(autoComplete)

      setOldSearchbarText(value)
    }
  }

  
// ==== END Search state and functions ====


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

  useEffect(() => {
    console.log(autoCompltions)
  }, [autoCompltions])

// ==== END Console log stuff ====


  return (
    <div>
      <CalculateWindowHeightHook/>
      <AppContext.Provider 
        value={{movieID, movieData, searchbarText, setSearchbarText, oldSearchbarText, setOldSearchbarText, suggestions, setSuggestions,  onSearchbarTextChanging, allMoviesData, setAllMoviesData, setMovieID, showResInSearchBar, history, pushToHistory, autoCompltions}}
      >
        <AppScroolbar>
          <AnimatePresence exitBeforeEnter>
            <Switch 
              location={location} 
              key={getCurrentPageUrl(location)}
            >
              <Route exact path='/' render={() => <MainPage/>} />
              <Route exact path={`/:${movieID}`} render={() => <StartPage/>} />
            </Switch>
          </AnimatePresence>
        </AppScroolbar>
      </AppContext.Provider>
    </div>
  )
}