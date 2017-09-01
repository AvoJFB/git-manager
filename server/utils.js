const fs = require('fs');
const path = require('path');

const isRepoDirectory = source => fs.lstatSync(source).isDirectory() && fs.existsSync(path.join(source, '.git'));
const getDirectories = source => (
  fs.readdirSync(source).map(name => path.join(source, name)).filter(isRepoDirectory)
);

exports.isRepoDirectory = isRepoDirectory;
exports.getDirectories = getDirectories;
