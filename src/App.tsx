import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Homepage from "./Components/Homepage/Homepage";
import SearchPage from "./Components/Searchpage/Searchpage";
import Moviepage from "./Components/Moviepage/Moviepage";
import DiaryEntryPage from "./Components/DiaryEntryPage/DiaryEntryPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import { isTokenValid } from "./services/AuthService";
import AddEntry from "./Components/DiaryEntryPage/AddEntry/AddEntry";
import MovieShowcasePage from "./Components/MovieShowcasePage/MovieShowcasePage";

const Home = () => <Homepage />;
const DiaryEntries = () => <DiaryEntryPage />;
const AddEntryPage = () => <AddEntry />
const Movies = () => <Moviepage />;
const AddMovies = () => <SearchPage />;
const MovieShowcase = () => <MovieShowcasePage />;

const App = () => {
  const sidebarItems = [
    { to: "/", label: "Home" },
    { to: "/entries", label: "Your Diary Entries" },
    { to: "/movies", label: "Movies" },
    { to: "/addMovies", label: "Add Movies" },
  ];

  var authorized = isTokenValid();
  if (!authorized) return <LoginPage />;
  return (
    <>
      <Router>
        <div className="flex h-screen w-screen max-w-screen max-h-screen">
          <Sidebar items={sidebarItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entries" element={<DiaryEntries />} />
            <Route path="/entries/add" element={<AddEntryPage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/addMovies" element={<AddMovies />} />
            <Route path="/movie/:id" element={<MovieShowcase />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;