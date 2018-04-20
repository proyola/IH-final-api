const express = require('express');
const router = express.Router();
const uploadConfig = require('../configs/multer.config');
const artistsController = require('../controllers/artists.controller');
const artistsMiddleware = require('../middleware/artists.middleware');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', artistsController.list);
router.get('/:id', artistMiddleware.checkValidId, artistsController.get);
router.post('/', uploadConfig.single('image'), artistsController.create);
router.put('/:id', uploadConfig.single('image'), artistsController.edit);
router.delete('/:id', artistsMiddleware.checkValidId, artistsController.delete);

module.exports = router;
