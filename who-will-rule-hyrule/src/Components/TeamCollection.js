import React from 'react';
import TeamCard from './TeamCard'

function TeamCollection({ zelda }) {
    // console.log(zelda);

    return (
        <div className="ui two column grid">
            <div className="row">
                {
                    zelda.map((zelda) => <TeamCard  key={zelda.id} zelda={zelda} />)
                }
            </div>
        </div>
    )
}

export default TeamCollection;