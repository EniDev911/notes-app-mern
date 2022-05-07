const router = require('express').Router();

router.get('/users/signin', (req, res) => {
  res.send('../../');
})

router.get('/users/signup', (req, res) => {
  res.send('Form register');
})


module.exports = router;