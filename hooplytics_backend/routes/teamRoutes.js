const express = require('express');
const router = express.Router();
const teamControllers = require('../controllers/teamControllers');

router.get('/', teamControllers.cGetAllTeams);
router.get('/:id', teamControllers.cGetTeamById);
router.post('/', teamControllers.cCreateTeam);
router.put('/:id', teamControllers.cUpdateTeam);
router.delete('/:id', teamControllers.cDeleteTeam);
router.get('/:id/players', teamControllers.cGetPlayersByTeamId);


module.exports = router;

