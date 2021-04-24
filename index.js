const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3000;
require('./src/config/mongoConnect')

const auth = require('./src/middlewares/auth')
const siteRouter = require('./src/routers/')

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static('public'))

app.use('/', auth, siteRouter);

app.get('*', (req,res) => {
  res.sendFile('./public/404.html', { root: __dirname })
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}!`);
});