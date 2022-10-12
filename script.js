// mendeklarasikan variabel dan mengambil api movie
const listMovieAPI = "https://api.themoviedb.org/3/discover/movie?api_key=8a7b3c0bea4f8ac64aaf7351a83e204a&sort_by=popularity.desc"
const IMG_PATH = "https://image.tmdb.org/t/p/w500/";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=8a7b3c0bea4f8ac64aaf7351a83e204a&query=&page=1";
const column = document.querySelector(".col");

// list movie berdasarkan popularity
getDataMovie = async () => {
    let response = await fetch(listMovieAPI);
    let movie = await response.json();

    let listMovie = ' ';

   movie.results.forEach(item => {
       let list = ` <div class="card shadow-sm">
            <img src="${IMG_PATH + item.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${item.title}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <p class="card-text">${item.release_date}</p>
                        </div>
                        <small class="text-muted">${item.vote_average}</small>
                    </div>
                </div>
            </div>`;
        listMovie += list;
   });

   column.innerHTML = listMovie;
}
getDataMovie();

// fitur search
const form = document.getElementById("myForm");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getDataMovie(SEARCH_API+'&query='+searchTerm)
    }else{
        getDataMovie();
    }
});

// async function getDataMovie() {
//     try {
//         let response = await fetch(listMovieAPI);
//         return await response.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function getMovie() {
//     let movies = await getDataMovie();
//     movies.results.forEach(item => {
//         listMovie.innerHTML += `<img src="${IMG_PATH + item.poster_path}" class="card-img-top" alt="...">
//          <div class="card-body">
//             <p class="card-text">${item.title}</p>
//             <div class="d-flex justify-content-between align-items-center">
//                 <div class="btn-group">
//                   <p class="card-text">${item.release_date}</p>
//                 </div>
//                 <small class="text-muted">${item.vote_average}</small>
//             </div>
//         </div>`;
        
//     });
// }

// getMovie();

    




    


