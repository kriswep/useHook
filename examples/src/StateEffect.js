import React, { useState, useEffect } from 'react';
import UseHook from 'usehook';

class StateEffect extends React.Component {
  render() {
    return (
      <UseHook hook={[useState, 0]}>
        {([number, setNumber]) => (
          <UseHook
            hook={[
              useEffect,
              () => {document.title = `You clicked ${number} times`},
              [number],
            ]}
          >
            {() => (
              <div>
                <span>Number via useState and useEffect: {number}</span>
                <button onClick={() => setNumber(number + 1)}>+1</button>
              </div>
            )}
          </UseHook>
        )}
      </UseHook>
    );
  }
}

export default StateEffect;
