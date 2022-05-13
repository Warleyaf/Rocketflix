import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const title = document.getElementById('title')
const description = document.getElementById('description');
const button = document.querySelector('button')
//const movieApi = `${BASE_URL}${idMovie}${API_KEY}${language}`

button.addEventListener('click', idMovi => {
  const idMovie =  Math.floor(Math.random() * (100000 - 10)) + 10
  console.log(idMovie)
})

