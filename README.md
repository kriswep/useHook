<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [useHook](#usehook)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

## Usage

See `demo` folder for now. Or enjoy a [codesandbox](https://codesandbox.io/s/7ml3653606)!

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

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/8836059?v=4" width="50px;"/><br /><sub><b>Christoph Benjamin Weber</b></sub>](https://wetainment.com)<br />[💻](https://github.com/kriswep/usehook/commits?author=kriswep "Code") [📖](https://github.com/kriswep/usehook/commits?author=kriswep "Documentation") [💡](#example-kriswep "Examples") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[dep-badge]: https://david-dm.org/kriswep/useHook.svg
[dep]: https://david-dm.org/kriswep/useHook
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/usehook/dist/usehook.cjs.js?compression=gzip&label=gzip%20size&style=flat-square
[gzip]: https://unpkg.com/usehook/dist/usehook.cjs.js
[size-badge]: http://img.badgesize.io/https://unpkg.com/usehook/dist/usehook.cjs.js?label=size&style=flat-square
[size]: https://unpkg.com/usehook/dist/usehook.cjs.js
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
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
