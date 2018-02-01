const webpack  = require('webpack');
const webpackBuildConf = require('./webpack.build.conf');
const webpackDevConf = require('./webpack.dev.conf');

webpack(process.env.npm_config_dev ? webpackDevConf : webpackBuildConf, function(err, stats) {
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
});
