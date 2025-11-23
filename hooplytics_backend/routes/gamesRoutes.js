const express = require('express');
const router = express.Router();
const gamesControllers = require('../controllers/gamesControllers');

router.get('/', gamesControllers.cGetAllGames);
router.get('/:id', gamesControllers.cGetGameById);
router.post('/', gamesControllers.cAddGame);
router.put('/:id', gamesControllers.cUpdateGame);
router.delete('/:id', gamesControllers.cDeleteGame);

module.exports = router;