import React from "react";

function TeamCard({ zelda }) {
    // console.log(zelda)

    return (
            <div className="ui column" style={{ width: 100}}>
                <div className="ui card" key={zelda.id}>
                    <div className="image">
                        <img src={zelda.image} alt={zelda.name} style={{width: 150}}/>
                    </div>
                    <div className="content">
                        <div className="header">
                            {zelda.name}
                        </div>
                        <div className="meta text-wrap">
                            <small>{zelda.category}</small>
                        </div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="icon shield" />
                            {zelda.strength}
                        </span>
                        <span>
                            <div className="ui center aligned segment basic">
                                <button className="ui mini red button">
                                    Remove
                                </button>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default TeamCard;