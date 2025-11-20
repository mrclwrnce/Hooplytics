const express = require('express');
const router = express.Router();
const playerControllers = require('../controllers/playerControllers');

router.get('/', playerControllers.cGetAllPlayers);
router.get('/:id', playerControllers.cGetPlayerById);
router.post('/', playerControllers.cAddPlayer);
router.put('/:id', playerControllers.cUpdatePlayer);
router.delete('/:id', playerControllers.cDeletePlayer);

module.exports = router;