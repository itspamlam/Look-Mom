const express = require('express');
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const dbconfig = require('./knexfile.js').development;
const knex = require('knex')(dbconfig);
const bookshelf = require('bookshelf')(knex);
const model = require('./server/model.js')(bookshelf)
const controller = require('./server/controller.js')(model);
 
const compiler = webpack(webpackConfig);

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/build'));
app.set('view engine', 'pug');
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/entries', controller.getEntries);

app.get('/entries/new', controller.newEntry);

app.get('/entries/:id', controller.getEntry);

app.post('/entries', controller.createEntry);

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});