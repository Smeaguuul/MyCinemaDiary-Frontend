import { Movie } from "../Components/MovieLogic";

export async function searchMovies(title : string, limit : number) : Promise<Movie[]> {
    var res = await fetch(`/api/movies/?query=${title.replace(/ /g, '+')}&limit=${limit}`);
    var movies = await res.json();
    return movies;
}

export async function addMovie(movie : Movie) : Promise<void> {

    var res = await fetch(`/api/movies/`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(movie)
    });
    if (res.status != 201) throw new Error (`Can't add ${movie.extendedTitle}!`)
}