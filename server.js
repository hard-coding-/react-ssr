const Koa = require('koa');
const ssr = require('./.built/server').default;

const app = new Koa();
const port = 3000;

app.use(async ctx => {
  const { res } = ctx;
  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end(ssr(ctx));
});

app.listen(port);

console.log(`Server started at: localhost:${port}`);