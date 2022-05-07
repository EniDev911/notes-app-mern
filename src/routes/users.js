const router = require('express').Router();

router.get('/users/signin', (req, res) => {
  res.send('Signin section');
})

router.get('/users/signup', (req, res) => {
  res.send('Form register');
})



module.exports = router;