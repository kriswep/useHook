import React, { useState, useEffect } from 'react';
import UseHook from 'usehook';

const useCustomHook = value => {
  const [number, setNumber] = useState(value);

  useEffect(() => {
    document.title = `You clicked ${number} times`;
  });

  return [number, setNumber];
};

class CustomHook extends React.Component {
  render() {
    return (
      <UseHook hook={[useCustomHook, 0]}>
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

export default CustomHook;
