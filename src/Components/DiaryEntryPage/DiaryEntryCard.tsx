import { DiaryEntry } from "../LogicClasses";
import { FaStar } from "react-icons/fa";

interface Props {
  entry: DiaryEntry;
}

function DiaryEntryCard({ entry }: Props) {
  const ratingStars = Array(5)
    .fill(null)
    .map((_, index) => {
      if (index < entry.rating) {
        return <FaStar key={index} color="yellow" />;
      } else {
        return <FaStar key={index} color="gray" />;
      }
    });

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex">
      {entry.movie && (
        <img
          className="w-24 h-36 object-cover mr-4"
          src={"http://localhost:5253/img/" + entry.movie.thumbnail}
          alt={entry.movie.name}
        />
      )}
      <div>
        <h2 className="text-lg font-bold text-purple-700">{entry.title}</h2>
        <p className="text-sm text-gray-400">
          {entry.date.toString()}
        </p>
        {entry.movie && (
          <div>
            <h3 className="text-md font-bold text-gray-400 mt-4">Movie:</h3>
            <p className="text-sm text-gray-400">{entry.movie.name}</p>
            <p className="text-sm text-gray-400">
              Director: {entry.movie.director}
            </p>
            <p className="text-sm text-gray-400">Year: {entry.movie.year}</p>
            <p className="text-sm text-gray-400">
              Genres: {entry.movie.movieGenres.join(", ")}
            </p>
          </div>
        )}
        <h3 className="text-md font-bold text-purple-700 mt-4">My Review:</h3>
        <p className="text-sm text-gray-400">{entry.review}</p>
        <p className="text-sm text-gray-400 flex mt-4">Rating: {ratingStars}</p>
        {entry.user && (
          <div>
            <h3 className="text-md font-bold text-gray-400 mt-4">User:</h3>
            <p className="text-sm text-gray-400">{entry.user.name}</p>
            <p className="text-sm text-gray-400">
              Username: {entry.user.username}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiaryEntryCard;
