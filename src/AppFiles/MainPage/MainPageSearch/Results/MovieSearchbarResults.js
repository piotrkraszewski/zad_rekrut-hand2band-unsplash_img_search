import { useContext } from 'react'
import { AppContext } from '../../../Contexts/AppContext'
import '../../../../styles/main.scss'
import { MovieSearchbarContext } from '../../../Contexts/MovieSearchbarContext'
import GotoOtherRoutesHooks from '../Hooks/GotoOtherRoutesHooks'


export default function MovieSearchbarResults() {
  const { showSuggestions, hoveredSuggestionIdx } = useContext(MovieSearchbarContext)
  const { searchbarText, autoCompltions } = useContext(AppContext)

  const [selectedMovieInQuickSearch] = GotoOtherRoutesHooks()
    

  return (
  <>
    {autoCompltions.length > 0 //if
    ? <ul 
        className={'searchbar_ul ' + 
        (showSuggestions && searchbarText && 'fadeIn')} 
      >
        {autoCompltions.map((item, idx) => 
          <li 
            className={'searchbar_li ' + 
            (hoveredSuggestionIdx === idx && 'active')}

            onClick={()=> selectedMovieInQuickSearch(item)}
            index={idx}
            key={idx}
          >
            <p className=''>
              {item.query}
            </p>
          </li>
        )}
      </ul>

    : //else
      <ul className='fadeIn searchbar_ul'>
        <li className='searchbar_li noResult'>no result</li>
      </ul>
    }
  </>
  )
}