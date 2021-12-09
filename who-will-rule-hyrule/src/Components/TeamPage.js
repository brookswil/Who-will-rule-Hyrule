import React, { useEffect, useState } from 'react';
import YourTeamArmy from './YourTeamArmy'
import TeamCollection from './TeamCollection';


const API = 'http://localhost:8000/characters';

function TeamPage() {
  const [zeldas, setZelda] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setZelda)
  }, []);

  function enlistZelda(zelda) {
    setZelda(zeldas.map((z) => (z.id === zelda.id ? {...z, enlist: true } : z)));
  }

  function releaseZelda(zelda) {
    setZelda(zeldas.map((z) => (z.id === zelda.id ? {...z, enlist: false } : z)));
  }

  function dischargeZelda(zelda) {
    console.log('discharging', zelda);
    setZelda(zeldas.filter((z) => z.id !== zelda.id))
  }

  return (
    <div>
        <YourTeamArmy
            zelda={zeldas.filter(z => z.enlist)}
            releaseZelda={releaseZelda}
            dischargeZelda={dischargeZelda}
         />
            <TeamCollection
                zelda={zeldas}
                enlistZelda={enlistZelda}
                dischargeZelda={dischargeZelda}
            />
       
    </div>
  );
}

export default TeamPage;