import { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import { useHistory } from 'react-router-dom'


export default function GotoOtherRoutesHooks() {
  const { searchbarText, setSearchbarText, oldSearchbarText,  setSearchID,  setShowSuggestions} = useContext(AppContext)
  const history = useHistory()

  function searchImages(text){
    if (searchbarText.length > 0 && text !== undefined) {
      history.push(`/s/${text}`)
      setSearchbarText(oldSearchbarText)
      setShowSuggestions(false)
      setSearchID(text)
    }
  }

  return [searchImages]
}