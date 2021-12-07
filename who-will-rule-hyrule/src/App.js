import React, {useEffect, useState} from 'react';
import TeamCollection from './Components/TeamCollection'

const API = 'http://localhost:3000/characters';

function App() {
  const [zelda, setZelda] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(json => setZelda(json))
  }, []);

  return (
    <div>
      <TeamCollection zelda={zelda} />
    </div>
  );
}

export default App;
