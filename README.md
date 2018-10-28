# useHook

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Just use the hooks. This library aims to provide a possibilits to use the hooks in yur plain old React components. Yes, even in classes. It does so, by providing a `render prop` which you can pass your hook to.

Usage see `demo` folder for now.
```javascript
import React, {useState} from 'react';

import UseHook from 'useHook';

class Hooked extends React.Component {
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
```

## WARNING
This is still highly experimental, as is the react hook [API](https://reactjs.org/hooks) itself

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
