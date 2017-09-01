const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const passport = require('koa-passport');
const mongoose = require('mongoose');
const reposController = require('./controllers/repos');
const DB_URL = require('./secretConfig').DB_URL;

const app = new Koa();
const router = new Router();
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

mongoose.connection.on('connected', () => {
  console.log('Connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

app.use(cors());
app.use(bodyParser());
app.use(logger());
app.use(passport.initialize());
app.use(passport.session());

router.get('/repos', reposController.getRepos);
router.post('/repos', reposController.init);
router.post('/repos/clone', reposController.clone);
router.get('/repos/:name', reposController.open);
router.del('repos/:name', reposController.deleteRepo);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
