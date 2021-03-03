import { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import { useHistory } from 'react-router-dom'


export default function GotoOtherRoutesHooks() {
  const { setSearchbarText, oldSearchbarText,  setSearchID,  setShowSuggestions} = useContext(AppContext)
  const history = useHistory()

  function searchImages(text){
    if (text !== undefined) {
      history.push(`/s/${text}`)
      setSearchbarText(oldSearchbarText)
      setShowSuggestions(false)
      setSearchID(text)
    }
  }

  return [searchImages]
}