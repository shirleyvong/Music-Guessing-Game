const router = require('express').Router();
const controller = require('../controllers/index');

router.get('/search', controller.searchArtist);
router.get('/tracks', controller.getTracksByArtist);

module.exports = router;