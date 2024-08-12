const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController');


router.get('/api/banner',bannerController.view);
router.post('/api/banner',bannerController.add);
router.put('/api/banner/:id',bannerController.update);

module.exports = router;