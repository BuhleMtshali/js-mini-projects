let movieArray = [];
let html = '';
const movieWrapper = document.querySelector('.movie-wrapper');
const inputValue = document.querySelector('#input-value');
inputValue.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
       addMovie();
       inputValue.value = ''
    }
})

function addMovie(){
    movieArray.push(inputValue.value);
    movieArray.forEach((array) => {
        html += `<div class="movie">
                <p class="movie-name">${array}</p>
                <span class="material-icons">delete_outline</span>
                </div>
                `
        console.log(movieArray)
    })
}

movieWrapper.innerHTML = html;