import React from "react";

function TeamSpecs({ zelda }) {
    return (
        <div className="ui segment">
            <div className="ui two column centered grid">
                <div className="row">
                    <div className="four wide column">
                        <img alt={zelda.name} className="ui medium circular image bordered" src={zelda.image} 
                        style={{ width: 200 }} />
                    </div>
                    <div className="four wide column">
                        <h2>Name: {zelda.name}</h2>
                        <p>
                            <strong>Strength: </strong>
                            {zelda.strength}
                        </p>
                        <br />
                        <div className="ui segment">
                            <div className="ui three column centered grid">
                                <div className="row">
                                    <div className="column">
                                        <i className="icon large circular red heartbeat" />
                                        <strong>{zelda.strength}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="ui button fluid">
                            Enlist
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamSpecs;