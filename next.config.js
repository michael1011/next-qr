const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const exec = require('child_process').exec;

module.exports = withCSS({
  cssModules: true,

  exportPathMap: () => {
    return {
      '/': { page: '/' }
    };
  },

  webpack(config) {
    config.plugins = config.plugins || [];

    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.beforeCompile.tap('StyleTypings', () => {
          exec('npm run build:style-types', (_err, _stdout, stderr) => {
            if (stderr) process.stderr.write(stderr);
          });
        });
      },
    });

    config.plugins.push(new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ]));

    return config;
  },
});
