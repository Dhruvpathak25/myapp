import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CountryApp from './CountryApp.js'; 


const Home = () => (
  <div>
    <h2>Home</h2>
  
  </div>
);



const App = () => {
  const [countries, setCountries] = useState([]);
  const [sortType, setSortType] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedCountry(null);
  };

  return (
    <Router>
      <div>
        <header className="app-header">
          <h1>React App</h1>
        </header>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/country-app">Country App</Link>
            </li>
            <li>
              <Link to="/material-ui-app">Material UI App</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country-app" element={<CountryApp />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;