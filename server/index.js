const Koa = require('koa');


const app = new Koa();
const port = 4000;

app.use(async (ctx) => {
  ctx.body = 'Yo!';
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
