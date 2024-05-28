import React, {MouseEventHandler} from 'react';

interface Props {
  onReset: MouseEventHandler;
}

const ResetButton: React.FC<Props> = ({onReset}) => {
  return (
    <button className="reset-button" onClick={onReset}>Reset</button>
  )
};

export default ResetButton;