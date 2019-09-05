import React from 'react';
import Card from './Card.js';



function List(props) {
const CardComponent = [];

for(let i = 0; i < props.cardsArray.length; i++) {
  for(let j =0; j < props.cardsObj.length; j++) {
    if(props.cardsArray[i] === props.cardsObj[j].id){
      CardComponent.push(<Card title={props.cardsObj[j].title}
        content = {props.cardsObj[j].content}
        key = {props.cardsObj[j].id}/>)
        i = i+1;
    }
    else{
      j=+j;
    }
    
  }
}

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {CardComponent}
      </div>
    </section>

  )
}


export default List;
