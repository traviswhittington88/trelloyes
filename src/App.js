import React from 'react';
import List from './List.js';
import STORE from './store.js';
import './index.css';
import './App.css';
//import { all } from 'q';

function App() {

const cardIdsArray = STORE.lists.map(item => item.cardIds)
const allCardsArray = Object.values(STORE.allCards);
const cards = [];

for(let i = 0; i < allCardsArray.length; i++){
  cards.push(allCardsArray[i]);  
}

for(let j = 0; j < cardIdsArray.length; j++) {
  cards.push(cardIdsArray);
}

const ListsComponentArray = STORE.lists.map((item) => 
  <List header={item.header} key={item.id} cardsArray={item.cardIds} cardsObj={allCardsArray}/>  
)

  return (
    <main className="App">
      <header className="App-header">
        <h1>
          Trelloyes!
        </h1>
      </header>
      <div className="App-list">
        {ListsComponentArray}
      </div>
    </main>
  );

}

export default App;
