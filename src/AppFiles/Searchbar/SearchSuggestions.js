import { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import '../../styles/main.scss'
import GotoOtherRoutesHooks from '../Hooks/GotoOtherRoutesHooks'


export default function SearchSuggestions() {
  const { searchbarText, suggestions, showSuggestions, hoveredSuggestionIdx } = useContext(AppContext)

  const [searchImages] = GotoOtherRoutesHooks()
    
  return (
    <ul 
      className={'searchbar_ul ' + 
      (showSuggestions && searchbarText.length >=3  && 'fadeIn')} 
    >
      {suggestions.length > 0  //if
      ? suggestions.map((item, idx) => 
        <li 
          className={'searchbar_li ' + 
          (hoveredSuggestionIdx === idx && 'active')}

          onClick={()=> searchImages(item.query)}
          index={idx}
          key={idx}
        >
          <p>
            {item.query}
          </p>
        </li>
      )

      : //else 
        <li className='noResult'>
          <p>no suggestions</p>
        </li>
      }
    </ul>
  )
}