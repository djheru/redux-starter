import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';
console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig)
  .run((err, stats) => {
    if(err) {
      console.log(err.bold.red);
      return 1;
    }
    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors) {
      return jsonStats.errors.map(err => console.log(err.red));
    }

    if(jsonStats.hasWarnings) {
      console.log('Webpack generated the following warnings: '.bold.yellow);
      return jsonStats.warnings.map(err => console.log(err.yellow));
    }

    console.log('Webpack stats: ', stats);

    console.log('Your app has been compiled in production mode and written to /dist'.bold.green);
    return 0;
  });
