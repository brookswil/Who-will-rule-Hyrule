import React from "react";

function TeamSpecs({ zelda }) {
    return (
        <div className="ui segment">
            <div className="ui two column centered grid">
                <div className="row">
                    <div className="four wide column">
                        <img alt={zelda.name} className="ui medium circular image bordered" src={zelda.image} />
                    </div>
                    <div className="four wide column">
                        <h2>Name: {zelda.name}</h2>
                        <p>
                            <strong>Strength: </strong>
                            {zelda.strength}
                        </p>
                        <br />
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamSpecs;