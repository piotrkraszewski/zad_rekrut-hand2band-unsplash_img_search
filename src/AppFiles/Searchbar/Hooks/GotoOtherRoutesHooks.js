import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'


export default function GotoOtherRoutesHooks() {
  const { searchbarText, setSearchbarText, oldSearchbarText,  setSearchID, pushToHistory, setAllMoviesData, fetchPopularMoviesOnStartPage, setShowSuggestions, search} = useContext(AppContext)

  function selectedSuggestion(text){
    if (searchbarText && text !== undefined) {
      pushToHistory(`/s/${text}`)
      setSearchbarText(oldSearchbarText)
      setShowSuggestions(false)
      search(text)
      setSearchID(text)
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