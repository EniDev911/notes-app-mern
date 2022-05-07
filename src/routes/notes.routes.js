import { Router } from 'express'
import Note from '../models/Note'

const router = Router();


router.get('/notes/add', (req, res) => {
  res.render('notes/new-note');
});

// post 
router.post('/notes/new-note', async (req, res) => {
  const { title, description } = req.body;
  console.log(title, description);
  const errors = [];
  if (!title) {
    errors.push({ text: 'Please write a Title' });
  }
  if (!description) {
    errors.push({ text: 'Please write a Description' });
  }

  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      title,
      description
    });
  } else {
    const newNote = new Note({ title, description });
    await newNote.save();
    res.send('ok');
  }
});

router.get('/notes', (req, res) => {
  res.send('Notes from database');
});


module.exports = router;