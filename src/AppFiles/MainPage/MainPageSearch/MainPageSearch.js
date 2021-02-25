/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react'
import { AppContext } from '../../Contexts/AppContext'
import '../../../styles/main.scss'
import ArrowKeysNavigationInQuickSearchHooks from './Hooks/enterKeyPressedInQuickSearch'
import ShowHideQuickSearchHook from './Hooks/ShowHideQuickSearchHook'
import GotoOtherRoutesHooks from './Hooks/GotoOtherRoutesHooks'
import MovieSearchbarResults from './Results/MovieSearchbarResults'

export default function MainPageSearch () {
  const { searchbarText, oldSearchbarText, onSearchbarTextChanging } = useContext(AppContext)
  
  const [enterKeyPressedInQuickSearch] = ArrowKeysNavigationInQuickSearchHooks()
  const [node, OnMovieSearchBarClicked] = ShowHideQuickSearchHook()
  const [, gotoStarPage] = GotoOtherRoutesHooks()


  return (
    <div className='movieSearchBar'>
      <div className='row container'>
        <h1>Unsplash</h1>
        <p>
          The internet's source of freely-usable images <br/>
          Powered by creators everywhere.
        </p>
        <div ref={node}>
          <form className='searchbox' onSubmit={e => e.preventDefault()}>
            <input
              onChange={onSearchbarTextChanging}
              className='movieSearchBarInput'
              type='text'
              placeholder='Search Movie Title...'
              value={searchbarText !== '' ? searchbarText : oldSearchbarText}
              onKeyPress={enterKeyPressedInQuickSearch}
              onClick={OnMovieSearchBarClicked}
            />
          </form>
          <MovieSearchbarResults/>
        </div>
      </div>
    </div>
  )
}