import React from 'react';
import Cell from '../Cell/Cell';

interface square {
  hasItem: boolean;
  clicked: boolean;
}

interface Props {
  items: square[];
  onCellClick: (index: number) => void;
}

const Board: React.FC<Props> = ({items, onCellClick}) => {
  return (
    <div className="board">
      {items.map((item, index) => (
        <Cell
          key={index}
          item={item}
          index={index}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;