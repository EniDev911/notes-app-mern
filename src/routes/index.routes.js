import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
  res.render('partials/index');
})


router.get('/about', (req, res) => {
  res.render('partials/about');

})

router.get('/contact', (req, res) => {
  res.render('/partials/contact');
})

export default router;