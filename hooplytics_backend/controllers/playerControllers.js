const Players = require('../models/playerModels');

const playerControllers = {
    cGetAllPlayers: async (req, res) => {
        try {
            const players = await Players.getAllPlayers();
            res.json({
                success: true,
                data: players
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching players',
                error: error.message
            });
        }
    },

    cGetPlayerById: async (req, res) => {
        try {
            const player = await Players.getPlayerById(req.params.id);
            if (!player) {
                return res.status(404).json({
                    success: false,
                    message: 'Player not found'
                });
            }
            res.json({
                success: true,
                data: player
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching player',
                error: error.message
            });
        }
    },

    cAddPlayer: async (req, res) => {
        try {
            const {
                first_name,
                last_name,
                position,
                height,
                weight,
                jersey_number,
                team_id,
                status
            } = req.body;
            if (!first_name || !last_name || !position || !height || !weight || !jersey_number || !team_id || !status) {
                return res.status(400).json({
                    success: false,
                    message: 'All fields are required'
                });
            }
            const newPlayer = await Players.addPlayer({
                first_name,
                last_name,
                position,
                height,
                weight,
                jersey_number,
                team_id,
                status
            });
            res.status(201).json({
                success: true,
                message: 'Player added successfully',
                data: newPlayer
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error adding player',
                error: error.message
            });
        }
    },

    cUpdatePlayer: async (req, res) => {
        try {
            const {
                first_name,
                last_name,
                position,
                height,
                weight,
                jersey_number,
                team_id,
                status
            } = req.body;

            const player = await Players.getPlayerById(req.params.id);
            if (!player) {
                return res.status(404).json({
                    success: false,
                    message: 'Player not found'
                });
            }
            await Players.updatePlayer(req.params.id, {
                first_name,
                last_name,
                position,
                height,
                weight,
                jersey_number,
                team_id,
                status
            });
            res.json({
                success: true,
                message: 'Player updated successfully'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error updating player',
                error: error.message
            });
        }
    },

    cDeletePlayer: async (req, res) => {
        try {
            const player = await Players.getPlayerById(req.params.id);
            if (!player) {
                return res.status(404).json({
                    success: false,
                    message: 'Player not found'
                });
            }
            await Players.deletePlayer(req.params.id);
            res.json({
                success: true,
                message: 'Player deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error deleting player',
                error: error.message
            });
        }
    }
};

module.exports = playerControllers;