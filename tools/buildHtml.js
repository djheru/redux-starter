import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err.bold.red);
  }

  const $ = cheerio.load(markup);

  //adding the link tag for production builds which have separate bundled css
  $('head').prepend('<link rel="stylesheet" href="styles.css">');
  fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
    if (err) {
      return console.log(err.bold.red);
    }

    console.log('index.html written to /dist'.green.bold);
  });

});
