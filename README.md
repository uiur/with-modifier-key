# with-modifier-key
[![Build Status](https://travis-ci.org/uiureo/with-modifier-key.svg)](https://travis-ci.org/uiureo/with-modifier-key)

Detect some modifier keys are pressed.

For example, you can use this to detect an user is going to open a link in new tab or window. 

``` javascript
var withModifierKey = require('with-modifier-key')

element.addEventListener('click', function (event) {
  if (withModifierKey(event)) {
    // yay
  }
})
```

## Install

```
npm install with-modifier-key
```

## License
MIT
