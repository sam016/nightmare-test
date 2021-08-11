# nightmare-electron test

Just for testing nightmare with latest electron.

With electron 12+, we would need to pass the `contextIsolation` as `false`. Here is how:

```javascript
const options = {
  electronPath: require('electron'),
  webPreferences: {
    contextIsolation: false,
  }
};

const nightmare = new Nightmare(options);
```

In earlier electron versions, `contextIsolation` used to be set as `false` by default. Documentation for reference: https://www.electronjs.org/docs/tutorial/context-isolation#how-do-i-enable-it
