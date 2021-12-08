import React from 'react';
import TeamCollection from './TeamCollection';
import YourTeamArmy from './YourTeamArmy'


function TeamPage({ zelda }) {
    

    return (
        <div>
            <YourTeamArmy zelda={zelda} />
            <TeamCollection zelda={zelda} />
        </div>
    )
}

export default TeamPage;