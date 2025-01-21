const express = require('express');
const router = express.Router();
const StandupController = require('../controllers/standupController');

router.get('/standups', StandupController.getStandups);

module.exports = router;
