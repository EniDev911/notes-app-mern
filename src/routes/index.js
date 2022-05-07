const router = require('express').Router();

router.get('/', function (req, res) {
  // pendiente por configurar
  res.render('../views/partials/index.hbs');
})

router.get('/about', function (req, res) {
  res.render('../views/partials/about.hbs');
})

router.get('/Contact', (req, res) => {
  res.render('contact');
})

module.exports = router;