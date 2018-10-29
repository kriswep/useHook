import React, { useState, useEffect } from 'react';
import UseHook from '../../src';

class CustomHook extends React.Component {
  render() {
    return (
      <UseHook hook={useCustomHook} hookValue={0}>
        {([number, setNumber]) => (
          <div>
            <span>Number via customHook: {number}</span>
            <button onClick={() => setNumber(number + 1)}>+1</button>
          </div>
        )}
      </UseHook>
    );
  }
}

const useCustomHook = value => {
  const [number, setNumber] = useState(value);

  useEffect(() => (document.title = `You clicked ${number} times`));

  return [number, setNumber];
};

export default CustomHook;
