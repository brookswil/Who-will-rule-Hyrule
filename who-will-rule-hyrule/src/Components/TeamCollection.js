import React from 'react';
import TeamCard from './TeamCard'

function TeamCollection({ zelda, enlistZelda, dischargeZelda }) {
    // console.log(zelda);
    console.log(zelda)
    return (
        <div className="container">
        <div className="ui four column grid">
            <div className="row">
                {zelda.map((zelda) => (
                <TeamCard
                    key={zelda.id}
                    zelda={zelda}
                    handleClick={enlistZelda}
                    dischargeZelda={dischargeZelda}
                    
                />
                ))}
                </div>
            </div>
        </div>
    );
}

export default TeamCollection;