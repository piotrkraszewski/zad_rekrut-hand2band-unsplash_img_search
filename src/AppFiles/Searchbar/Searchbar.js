import { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import '../../styles/main.scss'
import ShowHideSuggestionsHook from '../Hooks/ShowHideSuggestionsHook'
import GotoOtherRoutesHooks from '../Hooks/GotoOtherRoutesHooks'
import SearchSuggestions from './SearchSuggestions'
import lupe from '../../images/lupe.svg'

export default function StartPageSearch () {
  const { searchbarText, oldSearchbarText, onSearchbarTextChanging } = useContext(AppContext)

  const [node, OnSearchBarClicked] = ShowHideSuggestionsHook()
  const [searchImages] = GotoOtherRoutesHooks()

  function enterKeyPressed(e){
    const code = e.keyCode || e.which
    if (code === 13 /* enter key */) {
      searchImages(searchbarText)
    }
  }

  return (
    <>
      <div className='searchBar' ref={node}>
        <div onClick={() => searchImages(searchbarText)}>
        <img 
          src={lupe} 
          alt='lupe'
        />
          </div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            onChange={onSearchbarTextChanging}
            type='text'
            placeholder='Search free high-resolution photos'
            value={searchbarText ? searchbarText : oldSearchbarText}
            onKeyPress={enterKeyPressed}
            onClick={OnSearchBarClicked}
          />
        </form>
      </div>

      <SearchSuggestions />
    </>
  )
}