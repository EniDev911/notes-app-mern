const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const path = require('path');

// Path
const viewsPath = path.join(__dirname, 'views');
const publicPath = path.join(__dirname, 'public');
console.log(viewsPath);
console.log(publicPath);
// Initialize
const app = express();
require('./database');

// // Setting
app.set('port', process.env.PORT || 3000);
app.set('views', viewsPath);
app.engine('.hbs', hbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));

app.set('view engine', '.hbs');



// // Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'proSecret',
  resave: true,
  saveUninitialized: true
}))

// // Global variables

// // Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Server listener
app.listen(app.get('port'), () => {
  console.log('Server running on port', app.get('port'));
});

