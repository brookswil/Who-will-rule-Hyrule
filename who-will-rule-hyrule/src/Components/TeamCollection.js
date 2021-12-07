import React from "react";
import TeamCard from "./TeamCard";

function TeamCollection({ zelda }) {
    console.log(zelda)

    return (
        <div>
            {
                zelda.map((zelda) => <TeamCard key={zelda.id}/>)
            }
        </div>
    )
}

export default TeamCollection;