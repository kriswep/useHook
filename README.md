# useHook

[![dependencies][dep-badge]][dep]
[![size (gzip][gzip-badge]][gzip]
[![size][size-badge]][size]
[![module formats: umd, cjs, and es][module-badge]][module]

[![npm package][npm-badge]][npm]
[![MIT License][license-badge]][license]
[![React][react-badge]][react]
[![PRs welcome][pr-badge]][pr]

Just use the hooks. This library aims to provide a possibility to use fancy React hooks in yur plain old components. Yes, even in classes. It does so, by providing a `render prop` which you can pass your hook to.

_**Warning** This is still highly experimental, as is the react hook [API](https://reactjs.org/hooks) itself_

Usage see `demo` folder for now.

```javascript
import React, { useState } from 'react';

import UseHook from 'usehook';

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

[dep-badge]: https://david-dm.org/kriswep/useHook.svg
[dep]: https://david-dm.org/kriswep/useHook
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/usehook/lib/index.js?compression=gzip&label=gzip%20size&style=flat-square
[gzip]: https://unpkg.com/usehook/lib/index.js
[size-badge]: http://img.badgesize.io/https://unpkg.com/usehook/lib/index.js?label=size&style=flat-square
[size]: https://unpkg.com/usehook/lib/index.js
[module-badge]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20es-brightgreen.svg?style=flat-square
[module]: https://unpkg.com/usehook/
[npm-badge]: https://img.shields.io/npm/v/usehook.png?style=flat-square
[npm]: https://www.npmjs.com/package/usehook
[license-badge]: https://img.shields.io/npm/l/usehook.svg?style=flat-square
[license]: https://github.com/kriswep/usehook/blob/master/LICENSE
[react-badge]: https://img.shields.io/badge/%E2%9A%9B%EF%B8%8F-react-00d8ff.svg?style=flat-square
[react]: https://reactjs.org/
[pr-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[pr]: http://makeapullrequest.com
