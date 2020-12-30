module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': { utf8: false },
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.van'],
      minPixelValue: 1,
      mediaQuery: false
    },
    'postcss-preset-env': {},
    'postcss-viewport-units': {
      onlyCalc: true
    }
  }
};
