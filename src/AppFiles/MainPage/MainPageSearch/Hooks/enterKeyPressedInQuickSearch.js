import { useContext } from 'react'
import { AppContext } from '../../../Contexts/AppContext'
import { MovieSearchbarContext } from '../../../Contexts/MovieSearchbarContext'
import GotoOtherRoutesHooks from './GotoOtherRoutesHooks'

export default function ArrowKeysNavigationInQuickSearchHooks() {
  const { suggestions, pushToHistory} = useContext(AppContext)
  const { showQuickSearchRes, setShowQuickSearchRes, indexOfHighlightedMovie, setIndexOfHighlightedMovie } = useContext(MovieSearchbarContext)

  const [selectedMovieInQuickSearch] = GotoOtherRoutesHooks()
  
  
  function enterKeyPressedInQuickSearch(e){
    const code = e.keyCode || e.which
    if (code === 13 /* enter key */) {
      // implement
    }
  }
  return [enterKeyPressedInQuickSearch]
}