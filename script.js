let url = 'http://api.icndb.com/jokes/random';

const button = document.getElementById('get-joke');
const paragraph = document.getElementById('joke');

document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', function(){
  getJoke();
})

function getJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    let response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
    })
    xhr.send();
}