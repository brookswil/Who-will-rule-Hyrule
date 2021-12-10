import React from "react";


const TeamCard = ({ zelda, handleClick, dischargeZelda }) => {
    console.log(zelda.category)

    return (
            // <div className="card text-center" style={{ width: 175 }} >
            <div className="card text-center" style={{ width: 175 }} key={zelda.id} >

              <img src={zelda.image} className="card-img-top" alt={zelda.name}/>
              <div className="card-body">
                  <h5 className="card-title">{zelda.name}</h5>
                  <p className="card-text">
                      {zelda.category}
                  </p>
              </div>
            
                
                    <div>
                        <button onClick={() => handleClick(zelda)}>Add to Army</button>
                    </div>
                   
                                <button 
                                    className="ui mini red button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        dischargeZelda(zelda);
                                    }}
                                    >
                                        REMOVE
                                </button>
                          
            </div>
    );
}

export default TeamCard;