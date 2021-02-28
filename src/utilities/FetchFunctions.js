import axios from 'axios'
import { API_KEY, BASE_API_URL, POSTER_W500 } from './Consts'
import { getMovieIdFromLocationPathname } from './RoutesFunctions'


//==== Fetch autoComplition ====
export async function getAutoComplete(input){
  const url = `https://unsplash.com/nautocomplete/${input}`
  const response = await axios.get(/*'https://cors-anywhere.herokuapp.com/' + */ url)
  return response.data.autocomplete
}


//==== Fetch all Pictures ====
export async function getMoviesDataToDisplayInSearch(input){
  let allMoviesData
  if (typeof input === 'string'){  // if url
    allMoviesData = await getQueryData(input)
  } else if (typeof input === 'object'){
    allMoviesData = input
  } else {
    console.error(`Passed ${typeof input} input to getMoviesDataToDisplayInSearch. You must pass string or object`)
    return 
  }

  console.log(allMoviesData)

  return allMoviesData.map(movie => [
    movie.original_title,
    movie.id,
    POSTER_W500 + movie.poster_path
  ])
}

export async function getQueryData(url){
  const response = await axios.get(url)
  console.log(response)
  return response.data.results
}

export function createPictureSearchUrl(value){
  return `${BASE_API_URL}search/photos?query=${value}${API_KEY}`
}

//==== Fetch one Picture ====
export async function getMovieData(movieID){
  const response = await axios.get(`${BASE_API_URL}/3/movie/${movieID}?&${API_KEY}`)
  return response.data
}

export function setInitMovieID(location){
  const initMovieID = getMovieIdFromLocationPathname(location)
  if(initMovieID === '') return '157336' // interstellar
  return initMovieID
}