const lcovSourcemap = require('lcov-sourcemap');
const glob = require('glob');

const IGNORE_PATTERNS = ['./node_modules', './test', './scripts']

const maps = glob.sync('./**/*.js.map')
.filter(path => !IGNORE_PATTERNS.some(pattern => path.indexOf(pattern) !== -1))
.reduce((maps, file) => {
  const base = file.substr(2, file.length - 9);
  maps[base] = file;
  return maps;
}, {});

lcovSourcemap.writeLcov('./coverage/lcov.info', maps, '.', './coverage/lcov-mapped.info')
.then(function () {
  console.log('Coverage Mapped!');
});
