import { DiaryEntry, Movie } from '../LogicClasses';

interface Props {
  movie: Movie | undefined;
  diaryEntries: DiaryEntry[];
}

function FullMovieShowcase({ movie, diaryEntries }: Props) {
  if (movie == undefined) return <div></div>;
  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/purple-background.jpg')" }}
    >
      <div className="min-h-screen bg-gray-800/50 text-white p-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <img
            src={'http://localhost:5253/img/' + movie.imageUrl}
            alt={movie.name}
            className="w-48 h-72 object-cover rounded-lg shadow-lg"
          />
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold">
              {movie.name} ({movie.year})
            </h1>
            <h2 className="text-xl italic">{movie.extendedTitle}</h2>
            <p className="mt-2">{movie.overview}</p>
            <p className="mt-2">
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Country:</strong> {movie.country}
            </p>
            <p>
              <strong>Language:</strong> {movie.primaryLanguage}
            </p>
            <p>
              <strong>Status:</strong> {movie.status}
            </p>
            <p>
              <strong>Genres:</strong> {movie.movieGenres.join(', ')}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <div className="mt-4 space-y-4">
            {diaryEntries.map((entry, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{entry.title}</h3>
                <p className="mt-1">{entry.review}</p>
                <p className="mt-2 text-sm text-gray-300">
                  Rating: {entry.rating} / 10
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  {entry.date.toLocaleString()}
                </p>
                {entry.user && (
                  <p className="mt-1 text-sm text-gray-400">
                    Reviewed by: <strong>{entry.user.name}</strong> (@
                    {entry.user.username})
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullMovieShowcase;
