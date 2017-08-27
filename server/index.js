const Koa = require('koa');
const route = require('koa-route');
const bodyParser = require('koa-bodyparser');
const repos = require('./controllers/repos');

const app = new Koa();
const port = 4000;

app.use(bodyParser());
app.use(route.post('/repos', repos.init));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
