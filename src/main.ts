import Nightmare = require('nightmare');

const options: any = {
  electronPath: require('electron'),
  webPreferences: {
    contextIsolation: false,
  }
};

const nightmare = new Nightmare(options);

nightmare
  .goto('https://www.example.com')
  .evaluate(() => 10)
  .end()
  .then((res: any) => console.log(res))
  .catch((err: any) => console.error(err));

