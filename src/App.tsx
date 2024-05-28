import {useState} from 'react';
import './App.css';
import Board from './components/Board/Board';
import Attempts from './components/Attempts/Attempts';
import ResetButton from './components/ResetButton/ResetButton';
import createItems from './components/CreateItems/CreateItems';



const App = () => {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);

  const handleClick = (index: number) => {
    if (items[index].clicked) return;

    const newItems = items.map((item, i) =>
      i === index ? {...item, clicked: true} : item
    );

    setItems(newItems);
    setAttempts(attempts + 1);
  };

  const handleReset = () => {
    setItems(createItems());
    setAttempts(0);
  };

  return (
    <div className="app">
      <h1>Find the Hidden Item</h1>
      <Attempts count={attempts}/>
      <Board items={items} onCellClick={handleClick}/>
      <ResetButton onReset={handleReset}/>
    </div>
  );
};


export default App;
