module.exports = {
  endOfLine: 'auto',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  importOrder: [
    '^@utils/(.*)$',
    '^@apis/(.*)$',
    '^@hooks/(.*)$',
    '^@recoils/(.*)$',
    '^@pages/(.*)$',
    '^@base/(.*)$',
    '^@common/(.*)$',
    '^@components/(.*)$',
    '^@styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
