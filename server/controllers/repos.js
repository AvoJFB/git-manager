const Git = require('nodegit');
const path = require('path');
const REPO_DIR = require('../config').REPO_DIR;

module.exports.init = async (ctx, next) => {
  try {
    const repoPath = path.join(REPO_DIR, ctx.request.body.name);
    const repo = await Git.Repository.init(repoPath, 0);
    console.log(`Repository ${ctx.request.body.name} created succesfully`);
    console.log(repo);
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 400;
  }

  await next();
};

module.exports.clone = async (ctx, next) => {
  try {
    const repoPath = path.join(REPO_DIR, ctx.request.body.name);
    const repo = await Git.Clone.clone(ctx.request.body.url, repoPath);
    console.log(repo);
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 400;
  }

  await next();
};
