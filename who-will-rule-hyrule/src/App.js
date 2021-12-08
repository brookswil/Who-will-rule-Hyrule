import React, {useEffect, useState} from 'react';
import TeamPage from './Components/TeamPage';

const API = 'http://localhost:8000/characters';

function App() {
  const [zelda, setZelda] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(json => setZelda(json))
  }, []);

  return (
    <div className="App">
      <TeamPage zelda={zelda} />
    </div>
  );
}

export default App;
