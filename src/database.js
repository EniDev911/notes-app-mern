const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notes_atlas')
  .then(db => console.log('DB is connected'))
  .catch(err => console.log('Error:', err));


