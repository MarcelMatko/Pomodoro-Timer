const express = require('express');
const handlebars = require('express-handlebars');
var favicon = require('serve-favicon');
var path = require('path')

const app = express();

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('./public'))

app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  extname: 'hbs',
  defaultLayout: 'template'
}));


//Routing
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.listen(8080, () => {
  console.log('Server is running on port: ', 8080);
});

/*const startingMinutes = 10;
let time = startingMinutes * 60;

const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start-btn');

setInterval(updateCountdown, 1000);


function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds:seconds;
  timer.innerHTML = `${miuntes}:${seconds}`;
  time--;
}

startBtn.addEventListener('click',updateCountdown);*/