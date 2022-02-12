const router = require('express').Router();
const userCtrl = require('../controllers/user.controller')

router.get('/user', userCtrl.read);
router.post('/user', userCtrl.create);
router.put('/user/:id', userCtrl.update);
router.delete('/user/:id', userCtrl.delete);

module.exports = router;