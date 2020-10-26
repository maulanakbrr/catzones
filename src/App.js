import React, {useState, useEffect} from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import './App.css';

const App = () => {
  const [monsters, setmMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setmMonsters(users))
  },[])
  
  return (
    <div className="App">
      <h1 className="title">Catzones</h1>
      <SearchBox handleChange={handleChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
