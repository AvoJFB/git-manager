const Git = require('nodegit');
const path = require('path');
const fse = require('fs-extra');
const REPO_DIR = require('../config').REPO_DIR;
const utils = require('../utils');

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
    console.log(`Repository ${ctx.request.body.name} cloned succesfully`);
    console.log(repo);
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 400;
  }

  await next();
};

module.exports.open = async (ctx, next) => {
  try {
    const repoPath = path.join(REPO_DIR, ctx.params.name);
    const repo = await Git.Repository.open(repoPath);
    console.log(`Repository ${ctx.params.name} opened succesfully`);
    console.log(repo);
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 400;
  }

  await next();
};

module.exports.getRepos = async (ctx, next) => {
  try {
    ctx.body = utils.getDirectories(REPO_DIR).map(dir => path.basename(dir));
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 400;
  }

  await next();
};

module.exports.deleteRepo = async (ctx, next) => {
  try {
    await fse.remove(path.join(REPO_DIR, ctx.params.name));
    console.log(`Repo ${ctx.params.name} deleted successfully`)
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 400;
  }

  await next();
};
