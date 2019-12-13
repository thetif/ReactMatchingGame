import React from 'react';
import path from 'path';
import Card from "./card";
import GameSelector from "./gameSelector";


export default class GameContainer extends React.Component{
    constructor(props){
        super(props);
        this.sendResults = this.sendResults.bind(this);
        this.state={
            num_matches:8,
            cards:[],
            winner:false,
            turns:0,
            matches:0,
            activeCard:null,
            index:null,
            selectedSource:'fearless',
            backImage: '/img/fearless.png'
        };
        this.handleClick = this.handleClick.bind(this)
    }

    sendResults(source){
        this.setState({selectedSource:source}, () => {console.log(`Set selectedSource to ${this.state.selectedSource}`)})
    }

    setupGame = async() => {
        const json = await fetch(`/api/gateway.php/fearless/v1/employees/directory`, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: new Headers({
                'Authorization': 'Basic '+btoa(`${process.env.REACT_APP_MATCH_API_KEY}:x`), 
                'Accept': 'application/json'
            })
        })
        .then(response => response.json())
        .catch(error => console.error(`Error: ${error}`));
        
        if (json) {
            console.log(json);
            let possibleCards = json.employees;
    
            let chosenCards = [].fill(null, this.state.num_matches);
            for (let i=0; i<this.state.num_matches; i++){
                let randomPos = Math.floor(Math.random() * possibleCards.length);
    
                let card = possibleCards[randomPos];
                card.useImg = true;
                card.flipped = false;
                chosenCards.push(card);
                card = Object.assign({}, card);
                card.useImg = false;
                chosenCards.push(card);
                possibleCards.splice(randomPos,1)
            }
    
            shuffle(chosenCards);
    
            this.setState({cards:chosenCards});
        }
    }
    componentDidMount() {
        this.setupGame()
    }
    handleClick(index){
        console.log(this.state);
        if (this.state.transition){
            return
        }
        let cards = this.state.cards.slice();
        let card = cards[index];
        card.flipped = true;
        this.setState({cards:cards, transition:true}, ()=>{

                let cards = this.state.cards.slice();
                let flippedCards = cards.filter((card) =>card.flipped && !card.matched);
                let matches = this.state.matches;
                let turns = this.state.turns;
                let toSleep = 0;
                if (flippedCards.length === 2){

                    turns ++;
                    if(flippedCards[0].id === flippedCards[1].id){
                        flippedCards.forEach(card => card.matched = true);
                        matches ++;
                    } else{
                        toSleep = 1000;
                        flippedCards.forEach(card => card.flipped = false)
                    }

                }
            sleep(toSleep).then(()=>{
                this.setState({matches:matches, turns:turns, cards:cards, transition:false})
            })
        })
    }


    render(){
        return(
            <div className={"memory-game"}>
                {this.state.selectedSource ?
                    <React.Fragment>
                        {this.state.cards.map((card, index) =>  {
                            return (
                                <Card card={card}
                                      backImage={this.state.backImage}
                                      onClick={() => this.handleClick(index)}
                                      key={`${card.useImg ? 'pic' : 'name'}-${card.id}`}
                                />
                            )
                        })}

                    </React.Fragment>
                    :
                    <GameSelector sendResults={this.sendResults}/>

                }
            </div>
        )
    };

};

function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}








