import React from 'react';

type square = {
  hasItem: boolean;
  clicked: boolean;
}

interface Props {
  item: square;
  onClick: () => void;
  index: number;
}

const Cell: React.FC<Props> = ({ item, onClick }) => {
  return (
    <div className={`cell ${item.clicked ? 'clicked' : ''}`} onClick={onClick}>
      {item.clicked && (item.hasItem ? '💍' : '')}
    </div>
  );
};

export default Cell;