import React from 'react';
import Card from './Card.js';



function List(props) {

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) =>
          <Card 
            key={card.id}
            cardId={card.id}
            listId={props.listId}
            title={card.title}
            content={card.content}
            onDelete={props.onDelete}
            />
          )}
         <button 
          type='button'
          className='List-add-button'
          onClick={() => props.onRandom()}
          > 
          + Add Random Card
          </button>
      </div>
    </section>

  )
}


export default List;
