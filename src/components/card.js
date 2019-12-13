import React from "react";

export default function Card({card, backImage, onClick}){
    console.log({ card, backImage });
    return(
        <div onClick={!card.flipped ? onClick:undefined} className={`memory-card ${card.matched ? "matched": ""} ${card.flipped ? 'flip':''}`}>
            {card.flipped ?
                card.useImg ?
                    <img className={"img-card"} src={`${card.photoUrl}`} alt={card.displayName}/>
                    :
                    <span className={"name-card"}>
                        <h4 style={{ fontSize: '16px', fontWeight: '500' }}>{card.displayName}</h4>
                        <p style={{ fontSize: '10px'}}>
                            Title: {card.jobTitle}<br />
                            Herd: {card.division}
                        </p>
                    </span>
                :
                <img className="back-card" src={backImage} alt="Memory Card"/>
            }
        </div>

    )
}
