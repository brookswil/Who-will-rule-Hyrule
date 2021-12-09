import React from "react";

function TeamCard({ zelda }) {
    // console.log(zelda)

    return (
            <div className="card text-center" style={{ width: 175 }} key={zelda.id}>
              <img src={zelda.image} className="card-img-top" alt={zelda.name}/>
              <div className="card-body">
                  <h5 className="card-title">{zelda.name}</h5>
                  <p className="card-text">
                      {zelda.category}
                  </p>
              </div>
            </div>
    );
}

export default TeamCard;