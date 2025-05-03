let movieArray = [];

const movieWrapper = document.querySelector('.movie-wrapper');
const inputValue = document.querySelector('#input-value');
inputValue.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        movieArray.push(inputValue.value);
       addMovie();
       inputValue.value = ''
    }
})


function addMovie() {
    let html = '';
    movieArray.forEach((movie, index) => {
        html += `
            <div class="movie">
                <p class="movie-name">${movie}</p>
                <span class="material-icons delete-btn" data-index="${index}">
                    delete_outline
                </span>
            </div>
        `;
    });

    movieWrapper.innerHTML = html;

    // Add event listeners to all delete buttons
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.getAttribute('data-index');
            movieArray.splice(index, 1); // remove one item at that index
            addMovie(); // re-render
        });
    });
}