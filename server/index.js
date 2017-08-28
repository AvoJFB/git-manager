const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const repos = require('./controllers/repos');

const app = new Koa();
const router = new Router();
const port = 4000;

app.use(cors());
app.use(bodyParser());

router.post('/repos', repos.init);
router.post('/repos/clone', repos.clone);
router.get('/repos/:name', repos.open);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
