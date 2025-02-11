import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Homepage from "./Components/Homepage/Homepage";
import SearchPage from "./SearchPage";

const Home = () => <Homepage />;
const Search = () => <SearchPage />;
const Services = () => <div className="p-4">Services Page</div>;
const Contact = () => <div className="p-4">Contact Page</div>;
const FAQ = () => <div className="p-4">FAQ Page</div>;

const App = () => {
  const sidebarItems = [
    { to: '/', label: 'Home' },
    { to: '/search', label: 'Search' },
    { to: '/services', label: 'Services' },
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
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
