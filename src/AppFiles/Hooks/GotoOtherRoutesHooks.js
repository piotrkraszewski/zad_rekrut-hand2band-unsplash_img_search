import { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'


export default function GotoOtherRoutesHooks() {
  const { setSearchbarText, oldSearchbarText,  setSearchID, pushToHistory, setShowSuggestions} = useContext(AppContext)

  function searchImages(text){
    if (text !== undefined) {
      // console.log(text)
      pushToHistory(`/s/${text}`)
      setSearchbarText(oldSearchbarText)
      setShowSuggestions(false)
      setSearchID(text)
    }
  }

  const gotoStarPage = () => {
    setSearchbarText('')
    pushToHistory(`/`)
  }

  return [searchImages, gotoStarPage]
}