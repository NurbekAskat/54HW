import React from 'react';

interface Props {
  count: number;
}

const Attempts: React.FC<Props>  = ({count}) => {
  return (
    <div className="attempts">Attempts: {count}</div>
  );
};

export default Attempts;