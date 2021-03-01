import axios from 'axios'
import { API_KEY, BASE_API_URL } from './Consts'
import { getMovieIdFromLocationPathname } from './RoutesFunctions'


//==== Fetch autoComplition ====
export async function getAutoComplete(input){
  const url = `https://unsplash.com/nautocomplete/${input}`
  const response = await axios.get(
    /*'https://cors-anywhere.herokuapp.com/' + */ url
  )
  return response.data.autocomplete
}


//==== Fetch Images Data ====
export async function getImagesData(value){
  const url = `${BASE_API_URL}search/photos?query=${value}${API_KEY}`
  const allImagesData = await getQueryData(url)

  return allImagesData.map(img => ({
    id: img.id,
    regularImgQuality: img.urls.regular,
    fullImgQuality: img.urls.full,
    name: img.user.name,
    username: img.user.username,
    description: img.description,
    tags: img.tags.map(tag => tag.title)
  }))
}

export async function getQueryData(url){
  const response = await axios.get(url)
  return response.data.results
}



// probably not neede
//==== Fetch one Image ====
export async function getMovieData(movieID){
  const response = await axios.get(`${BASE_API_URL}/3/movie/${movieID}?&${API_KEY}`)
  return response.data
}

export function setInitMovieID(location){
  const initMovieID = getMovieIdFromLocationPathname(location)
  if(initMovieID === '') return '157336' // interstellar
  return initMovieID
}