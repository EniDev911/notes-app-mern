const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

// Initialize
const app = express();
require('./database');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('server running on ', app.get('port'));
})
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', hbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


// const express = require('express');
// const path = require('path');
// // const exphbs = require('express-handlebars');
// import { engine } from 'express-handlebars';
// const methodOverride = require('method-override');
// const session = require('express-session');

// // Init
// const app = express();


// // Setting
// app.set('port', process.env.PORT || 3000);
// // app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', engine({ extname: '.hbs' }));
// // app.engine('hbs', exphbs.create({
// //   extname: 'hbs',
// //   defaultLayout: 'main',
// //   layoutsDir: path.join(app.get('views'), 'layouts'),
// //   partialsDir: path.join(app.get('views'), 'partials')
// // }));

// app.set('view engine', 'hbs');
// app.set('views', './views');

// // Middlewares
// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));
// app.use(session({
//   secret: 'proSecret',
//   resave: true,
//   saveUninitialized: true
// }))
// // Global variables

// // Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// // Server listener
// app.listen(app.get('port'), () => {
//   console.log('Server running on port', app.get('port'));
// });

