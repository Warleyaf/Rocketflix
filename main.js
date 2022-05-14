import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const title = document.getElementById('title')
const description = document.getElementById('description');
const button = document.querySelector('button')
const image = document.querySelector('#image')


async function filme() {
  const movie =  Math.floor(Math.random() * (100000 - 10)) + 10
  const url = `${BASE_URL}${movie}${API_KEY}`;
  const infoFilme = await fetch(url).then(r => r.json());
  const img = `${IMG_URL}${infoFilme.poster_path}`
  
  title.innerHTML = infoFilme.title;
  description.innerHTML = infoFilme.overview;
  image.setAttribute('src', img)

  console.log(infoFilme)
}


button.addEventListener('click', filme);