import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'


export default function GotoOtherRoutesHooks() {
  const { searchbarText, setSearchbarText, oldSearchbarText,  setMovieID, pushToHistory, setAllMoviesData, fetchPopularMoviesOnStartPage, setShowSuggestions, search} = useContext(AppContext)

  function selectedSuggestion(text){
    if (searchbarText && text !== undefined) {
      pushToHistory(`/${text}`)
      setSearchbarText(oldSearchbarText)
      setShowSuggestions(false)
      search(text)
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