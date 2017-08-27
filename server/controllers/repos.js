const Git = require('nodegit');
const path = require('path');
const REPO_DIR = require('../config').REPO_DIR;

module.exports.init = async function add(ctx, next) {
  const repoPath = path.join(REPO_DIR, ctx.request.body.name);

  Git.Repository.init(repoPath, 0).then((repo) => {
    console.log(repo);
  }).catch(err => console.log(err));

  await next();
};
