import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import GotoOtherRoutesHooks from './GotoOtherRoutesHooks'

export default function EnterKeyPressedInQuickSearch() {
  const { suggestions, pushToHistory, showSuggestions, setShowSuggestions, hoveredSuggestionIdx, setHoveredSuggestionIdx } = useContext(AppContext)

  const [selectedMovieInQuickSearch] = GotoOtherRoutesHooks()
  
  
  function enterKeyPressedInSearch(e){
    const code = e.keyCode || e.which
    if (code === 13 /* enter key */) {
      // implement
    }
  }

  return enterKeyPressedInSearch
}