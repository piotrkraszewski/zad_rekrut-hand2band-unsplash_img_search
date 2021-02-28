import { AppContext } from '../../Contexts/AppContext'
import { useEffect, useContext, useRef } from 'react'

export default function ShowHideSuggestionsHook(props) {
  const { searchbarText, setSearchbarText, oldSearchbarText, setOldSearchbarText, showResInSearchBar, setShowSuggestions } = useContext(AppContext)
  const node = useRef()

  function hideOnOutsideClick(e) {
    if (!node.current.contains(e.target)){
      setShowSuggestions(false) 
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', hideOnOutsideClick)
    return () => {
      // return function to be called when unmounted
      document.removeEventListener('mousedown', hideOnOutsideClick)
    }
  }, [])

  const OnSearchBarClicked = async e => {
    setShowSuggestions(true)
    if (searchbarText === '') {
      showResInSearchBar(oldSearchbarText)
      setSearchbarText(oldSearchbarText)
      setOldSearchbarText('')
    }
  }

  return [node, OnSearchBarClicked]
}