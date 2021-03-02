import { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import '../../styles/main.scss'
import GotoOtherRoutesHooks from '../Hooks/GotoOtherRoutesHooks'


export default function SearchSuggestions() {
  const { searchbarText, autoCompltions, showSuggestions, hoveredSuggestionIdx } = useContext(AppContext)

  const [selectedSuggestion] = GotoOtherRoutesHooks()
    
  return (
    <ul 
      className={'searchbar_ul ' + 
      (showSuggestions && searchbarText.length >=3  && 'fadeIn')} 
    >
      {autoCompltions.length > 0  //if
      ? autoCompltions.map((item, idx) => 
        <li 
          className={'searchbar_li ' + 
          (hoveredSuggestionIdx === idx && 'active')}

          onClick={()=> selectedSuggestion(item.query)}
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