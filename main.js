import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const infoMovie = document.querySelector('#info-movie')
const button = document.querySelector('button')

button.addEventListener('click', async() => {
  const idMovie =  Math.floor(Math.random() * (100000 - 10)) + 10
  const url = `${BASE_URL}${idMovie}${API_KEY}`
  try {
    const data = await fetch(url).then(response => response.json());
    infoMovie.innerHTML = `
      <img src="${IMG_URL}${data.poster_path}"/>
      <div>
        <h1> ${data.title} </h1>
        <p> ${data.overview} </p>
      </div>
    `
    if (data.success === false) {
      infoMovie.innerHTML = `
      <img src="./assets/programing-study.gif"/>
      <div>
        <h1> Filme não encontrado </h1>
        <p> Isso é um sinal pra você estudar 📖, então vamos!!!, até por que seu futuro só depende de você. Lembre-se, tu não nasceu herdeiro é triste... eu sei mas boraa. </p>
      </div>
    `
    }
    console.log(data)
  } catch(e){}
})