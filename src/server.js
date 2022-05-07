import app from './app';

const methodOverride = require('method-override');
const session = require('express-session');

require('./database');
// // Setting
app.set('port', process.env.PORT || 3000);


// Server listener
app.listen(app.get('port'), () => {
  console.log('Server running on port', app.get('port'));
});

