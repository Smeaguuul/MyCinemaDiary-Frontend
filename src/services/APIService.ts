import { Movie } from "../Components/MovieLogic";

export async function searchMovies(title : string, limit : number) : Promise<Movie[]> {
    var res = await fetch(`/api/movies/?query=${title.replace(/ /g, '+')}&limit=${limit}`);
    var movies = await res.json();
    return movies;
}