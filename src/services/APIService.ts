import { DiaryEntry, Movie } from "../Components/LogicClasses";

export async function searchMovies(
  title: string,
  limit: number
): Promise<Movie[]> {
  const token = localStorage.getItem("token"); // Retrieve the token
  var res = await fetch(
    `/api/moviesearch/?query=${title.replace(/ /g, "+")}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  var movies = await res.json();
  return movies;
}

export async function getMovies(): Promise<Movie[]> {
  console.log("Getting movies ");
  var res = await fetch(`/api/movies/`);
  var movies = await res.json();
  console.log("Got movies");
  return movies;
}

export async function getEntries(): Promise<DiaryEntry[]> {
  console.log("Getting entries ");
  const token = localStorage.getItem("token"); // Retrieve the token
  var res = await fetch(`/api/diaryentries/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  var entries = await res.json();
  console.log("Got entries");
  return entries;
}

export async function addMovie(movie: Movie): Promise<void> {
  var res = await fetch(`/api/movies/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(movie),
  });
  if (res.status != 201) throw new Error(`Can't add ${movie.extendedTitle}!`);
}

export async function addEntry(entry: DiaryEntry) {
  console.log("Saving: " + entry);
  const token = localStorage.getItem("token");
  var res = await fetch(`/api/diaryentries/save`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(entry),
  });
  if (res.status != 201) throw new Error(`Can't add ${entry.title}!`);
}

// "Rating": 5,
// "Review": "Wow is this a great movie. I loved it!",
// "Title": "Must watch film!",
// "Date": "2024-01-01",
// "MovieId": 1
// rating : number, review : string, title: string, date: string, movieId : number
