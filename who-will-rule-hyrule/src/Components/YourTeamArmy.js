import React from 'react';
import TeamCard from './TeamCard';

function YourTeamArmy({zelda, releaseZelda, dischargeZelda}) {
    return (
        <div className = "ui segment inverted zelda-army">
            <div className="ui five column grid">
                {/* <div className = "row zelda-army-row"> */}
                    {/* {zelda.map((zelda) => <TeamCard key={zelda.id} zelda={zelda}/>)} */}
                {zelda.map((zelda) => (
                    <TeamCard
                        key={zelda.id}
                        zelda={zelda}
                        handleClick={releaseZelda}
                        dischargeZelda={dischargeZelda}
                    />
                        
                ))}
                    Your Team Army 
                {/* </div> */}
            </div>
        </div>
    )
}

export default YourTeamArmy;