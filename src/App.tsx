import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Homepage from "./Components/Homepage/Homepage";
import SearchPage from "./Components/Searchpage/Searchpage";
import Moviepage from "./Components/Moviepage/Moviepage";

const Home = () => <Homepage />;
const Search = () => <SearchPage />;
const Movies = () => <Moviepage />;
const Contact = () => <div className="p-4">Contact Page</div>;
const FAQ = () => <div className="p-4">FAQ Page</div>;

const App = () => {
  const sidebarItems = [
    { to: '/', label: 'Home' },
    { to: '/search', label: 'Search' },
    { to: '/movies', label: 'Movies' },
    { to: '/contact', label: 'Contact' },
    { to: '/faq', label: 'FAQ' },
  ];
  return (
    <Router>
      <div className="flex h-screen w-screen">
        <Sidebar  items={sidebarItems}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
