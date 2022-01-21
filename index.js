const searchInput = document.getElementById('search');
const results = document.getElementById('results');

let films;
let searchTerm = '';

const fetchFilms = async() => {
    movieData = {
        title: '',
        description: '',
        imageUrl: '',
        date: ''
    };
    films = await fetch(
        `https://www.omdbapi.com/?apikey=${myApiKey}=` + searchTerm).then(res =>
        res.json());


    console.log(films);
    this.movieData.title = films['Title'];
    this.movieData.description = films['Plot'];
    this.movieData.imageUrl = films['Poster'];
    this.movieData.date = films['Released'];

};

const showFilms = async() => {
    await fetchFilms();

    results.innerHTML = (
        `
        <div class="card" style="width: 100%; height: 50%;">
          <img class="card-img-top" src="${movieData.imageUrl}" alt="Card image cap">
          <div class="card-header">${movieData.title}</div>
          <div class="card-body">
            <h5 class="card-title">${movieData.date}</h5>
            <p class="card-text">${movieData.description}</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
        `
    );
};

searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    if (searchTerm !== '' && searchTerm !== undefined) {
        showFilms();
    }
    // console.log(e.target.value);
});
