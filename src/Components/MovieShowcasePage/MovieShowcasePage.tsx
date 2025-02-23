import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEntriesForMovie, getMovie } from "../../services/APIService";
import { DiaryEntry, Movie } from "../LogicClasses";
import FullMovieShowcase from "./FullMovieShowcase";

function MovieShowcasePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (id == null) return <>No id provided</>;
  var movieId = Number.parseInt(id);

  const getMovieInfo = async (movieId: number) => {
    try {
      const movieData = getMovie(movieId);
      const diaryEntriesData = getEntriesForMovie(movieId);
      movieData.then((movie) => setMovie(movie));
      diaryEntriesData.then((diaryEntries) => setDiaryEntries(diaryEntries));
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else console.log("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieInfo(movieId);
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
   <FullMovieShowcase movie={movie} diaryEntries={diaryEntries} />
  );
}

export default MovieShowcasePage;
