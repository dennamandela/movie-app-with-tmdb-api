// mendeklarasikan variabel dan mengambil element dari html
const API_URL_MOVIE = "https://api.themoviedb.org/3/discover/movie?api_key=8a7b3c0bea4f8ac64aaf7351a83e204a&sort_by=popularity.desc"

const cari = document.getElementById("search");

const form = document.getElementById("myForm");

const tampil = document.getElementById("content");

// mengambil data api movie
getMovie(API_URL_MOVIE);

async function getMovie(url) {
    let response = await fetch(url);
    let responseData = await response.json();
    showlistMovie(responseData);
}

function showlistMovie(movies) {

    movies.forEach(itemMovie => {
        console.log(itemMovie);
    });



}


