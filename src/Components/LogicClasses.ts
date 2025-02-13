export class Movie {
  id: number;
  country: string;
  director: string;
  extendedTitle: string;
  name: string;
  firstAirTime: string; // Consider using Date type if you want to handle dates
  overview: string;
  primaryLanguage: string;
  primaryType: string;
  status: string;
  year: number;
  slug: string;
  imageUrl: string;
  thumbnail: string;
  tvdbId: string;
  imdbId: string;
  tmdbId: string;
  movieGenres: string[];

  constructor(
    id: number,
    country: string,
    director: string,
    extendedTitle: string,
    name: string,
    firstAirTime: string,
    overview: string,
    primaryLanguage: string,
    primaryType: string,
    status: string,
    year: number,
    slug: string,
    imageUrl: string,
    thumbnail: string,
    tvdbId: string,
    imdbId: string,
    tmdbId: string,
    movieGenres: string[]
  ) {
    this.id = id;
    this.country = country;
    this.director = director;
    this.extendedTitle = extendedTitle;
    this.name = name;
    this.firstAirTime = firstAirTime;
    this.overview = overview;
    this.primaryLanguage = primaryLanguage;
    this.primaryType = primaryType;
    this.status = status;
    this.year = year;
    this.slug = slug;
    this.imageUrl = imageUrl;
    this.thumbnail = thumbnail;
    this.tvdbId = tvdbId;
    this.imdbId = imdbId;
    this.tmdbId = tmdbId;
    this.movieGenres = movieGenres;
  }
}

export interface DiaryEntry {
  id: number;
  title: string;
  review: string;
  rating: number;
  date: Date;
  movie?: Movie;
  user?: User;
}

export interface User {
  userId: number;
  username: string;
  name: string;
}
