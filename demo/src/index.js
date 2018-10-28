import React, {useState} from 'react'
import {render} from 'react-dom'

import UseHook from '../../src'

class Demo extends React.Component {
  render() {
    return (
      <UseHook hook={useState} hookValue={0}>
        {([number, setNumber]) => (
          <div>
            <span>Number: {number}</span>
            <button onClick={() => setNumber(number + 1)}>+1</button>
          </div>
        )}
      </UseHook>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
