# sensitive-words


## Example

```bash
$ npm install sensitive-words
```

```js
const { sensitive-words } = require('sensitive-words');
// ES2015 modules
import { sensitive-words } from 'sensitive-words'

const filtered = sensitiveWords(
    'The new apple macbook pro will have touchbar',
    ['pro', 'touchbar']
);

console.log(filtered);
// The new apple macbook *** will have ***
```
