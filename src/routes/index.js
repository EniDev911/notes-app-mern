const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World');
})

router.get('/about', (req, res) => {
  res.send('About section');
})

router.get('/Contact', (req, res) => {
  res.send('Contact section');
})

module.exports = router;