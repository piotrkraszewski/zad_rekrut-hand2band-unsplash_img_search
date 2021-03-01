import { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import '../../styles/main.scss'
import ShowHideSuggestionsHook from './Hooks/ShowHideSuggestionsHook'
import SearchSuggestions from './SearchSuggestions'
import lupe from '../../images/lupe.svg'

export default function StartPageSearch () {
  const { searchbarText, oldSearchbarText, onSearchbarTextChanging } = useContext(AppContext)

  const [node, OnSearchBarClicked] = ShowHideSuggestionsHook()

  return (
    <>
      <div className='searchBar' ref={node}>
        <img src={lupe} alt='lupe'/>
        <form onSubmit={e => e.preventDefault()}>
          <input
            onChange={onSearchbarTextChanging}
            type='text'
            placeholder='Search free high-resolution photos'
            value={searchbarText ? searchbarText : oldSearchbarText}
            // onKeyPress={enterKeyPressedInSearch}
            onClick={OnSearchBarClicked}
          />
        </form>
      </div>

      <SearchSuggestions />
    </>
  )
}