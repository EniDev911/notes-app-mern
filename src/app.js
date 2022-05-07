'use strict'
import express from 'express';
import { create } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import indexRoutes from './routes/index.routes';
import notesRoutes from './routes/notes.routes';

const app = express();
app.set("views", path.join(__dirname, 'views'));

const exphbs = create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get("views"), "partials")
});

app.engine(".hbs", exphbs.engine);
app.set('view engine', '.hbs');

// // Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


// Routes
app.use(indexRoutes);
app.use(notesRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;