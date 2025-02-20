import { useEffect, useState } from "react";
import { Movie } from "../../LogicClasses";
import MoviePicker from "./MoviePicker";
import { addEntry, getMovies } from "../../../services/APIService";
import MovieThumbnail from "../../Moviepage/MovieThumbnail";
import MovieThumbnailSkeleton from "../../Moviepage/MovieThumbnailSkeleton";

const AddEntry = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieId, setMovieId] = useState<number>();
  
  const fetchMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      console.log("An unknown error occurred");
    } finally {
      // setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);
  
  const movieSelected = () => {
    var movie = movies.find(movie => movie.id == movieId);
    if (movie != undefined) return <MovieThumbnail movie={movie}></MovieThumbnail>
    else return <MovieThumbnailSkeleton />
  }
  
  const saveEntry = () => {
    var entry = {
      rating : rating, 
      review : review, 
      title: title, 
      date: new Date(date), 
      movieId : movieId
    };
    addEntry(entry)
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col p-10 rounded-lg shadow-lg bg-gray-800">
        <label className="text-lg text-white"> Title: </label>
        <input type="text" placeholder="My Entry" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></input>
        <label className="text-lg text-white mt-4"> Review: </label>
        <textarea rows={5} placeholder="My Entry" value={review} onChange={(e) => setReview(e.target.value)} className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
        <label className="text-lg text-white mt-4"> Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></input>
        {movieSelected()}
        <MoviePicker onSelect={setMovieId} movies={movies} ></MoviePicker>
        <button className="w-20 h-10 bg-purple-700 hover:bg-purple-600 mt-4 text-white" onClick={saveEntry}>Save Entry</button>
      </div>
    </div>
  )
};

export default AddEntry;
