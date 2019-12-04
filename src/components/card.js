import React from "react";

export default function Card({card, backImage, onClick}){
    return(
        <div onClick={!card.flipped ? onClick:undefined} className={`memory-card ${card.matched ? "matched": ""} ${card.flipped ? 'flip':''}`}>
            {card.flipped ?
                card.useImg ?
                    <img className={"img-card"} src={card.img} alt={card.txt}/>
                    :
                    <span className={"name-card"}>
                            {card.txt}
                        </span>
                :
                <img className="back-card" src={backImage} alt="Memory Card"/>
            }
        </div>

    )
}
