import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Homepage from "./Components/Homepage/Homepage";
import SearchPage from "./Components/Searchpage/Searchpage";
import Moviepage from "./Components/Moviepage/Moviepage";
import DiaryEntryPage from "./Components/DiaryEntryPage/DiaryEntryPage";

const Home = () => <Homepage />;
const DiaryEntries = () => <DiaryEntryPage />;
const Movies = () => <Moviepage />;
const AddMovies = () => <SearchPage />;
const FAQ = () => <div className="p-4">FAQ Page</div>;

const App = () => {
  const sidebarItems = [
    { to: '/', label: 'Home' },
    { to: '/entries', label: 'Your Diary Entries' },
    { to: '/movies', label: 'Movies' },
    { to: '/addMovies', label: 'Add Movies' },
    { to: '/faq', label: 'FAQ' },
  ];
  return (
    <Router>
      <div className="flex h-screen w-screen max-w-screen max-h-screen">
        <Sidebar  items={sidebarItems}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entries" element={<DiaryEntries />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/addMovies" element={<AddMovies />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
