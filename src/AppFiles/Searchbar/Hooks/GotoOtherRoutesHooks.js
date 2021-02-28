import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'


export default function GotoOtherRoutesHooks() {
  const { searchbarText, setSearchbarText, oldSearchbarText,  setMovieID, pushToHistory, setAllMoviesData, fetchPopularMoviesOnStartPage, setShowSuggestions} = useContext(AppContext)

  function selectedSuggestion(item){
    if (searchbarText && item !== undefined) {
      pushToHistory(`/${item}`)
      setSearchbarText(oldSearchbarText)
      setShowSuggestions(false)
      // setMovieID(item[1])
    }
  }

  const gotoStarPage = () => {
    setAllMoviesData([])
    setSearchbarText('')
    fetchPopularMoviesOnStartPage()
    pushToHistory(`/`)
  }

  return [selectedSuggestion, gotoStarPage]
}