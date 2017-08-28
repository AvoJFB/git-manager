const Git = require('nodegit');
const fs = require('fs');
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

module.exports.getNames = async (ctx, next) => {
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const getDirectories = source => (
    fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory)
  );

  try {
    const repoNames = getDirectories(REPO_DIR).map(dir => path.basename(dir));
    ctx.body = repoNames;
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 400;
  }

  await next();
};
