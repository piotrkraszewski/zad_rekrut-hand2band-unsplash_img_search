import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import GotoOtherRoutesHooks from './GotoOtherRoutesHooks'

export default function KeyboardHooks() {
  const { searchbarText } = useContext(AppContext)
  const [selectedSuggestion] = GotoOtherRoutesHooks()
  
  
  function enterKeyPressed(e){
    const code = e.keyCode || e.which
    if (code === 13 /* enter key */) {
      selectedSuggestion(searchbarText)
    }
  }

  return enterKeyPressed
}