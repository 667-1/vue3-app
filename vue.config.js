const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Zopfli = require('@gfx/zopfli');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  indexPath: 'index.html',
  publicPath: '/',
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    port: 8081,
    compress: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
    config.plugins.delete('prefetch');
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'eval';
      config.cache = {
        type: 'filesystem',
        store: 'pack'
      };
      config.plugins.push(
        new StylelintPlugin({
          files: ['**/*.{vue,css,scss,sass}'],
          fix: true
        })
      );
    }
    if (process.env.NODE_ENV === 'production') {
      config.performance = {
        hints: false
      };
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            extractComments: false,
            terserOptions: {
              format: {
                comments: false
              },
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log']
              }
            }
          })
        ],
        splitChunks: {
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial'
            },
            elementUI: {
              name: 'chunk-vant',
              priority: 20,
              test: /vant/,
              chunks: 'all'
            }
          }
        }
      };
      config.plugins.push(
        new CompressionPlugin({
          algorithm(input, compressionOptions, callback) {
            return Zopfli.gzip(input, compressionOptions, callback);
          },
          compressionOptions: {
            numiterations: 15
          },
          minRatio: 0.99,
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
        })
      );
    }
    if (process.env.REPORT) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static'
        })
      );
    }
  }
};
