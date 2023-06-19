import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import SearchResultList from './components/SearchResultList';

function App() {
  const [results, setResults] = useState([])
  return (
    <div className="App">
      <div className="search-bar-container">
        <Search setResults = {setResults} />
        <SearchResultList results = {results} />
      </div>
    </div>
  );
}

export default App;
