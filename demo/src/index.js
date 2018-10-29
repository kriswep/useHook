import React from 'react';
import { render } from 'react-dom';

import StateEffect from './StateEffect';
import CustomHook from './CustomHook';

class Demo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StateEffect />
        <CustomHook />
      </React.Fragment>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
