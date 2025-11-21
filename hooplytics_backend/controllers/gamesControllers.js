const Games = require('../models/gamesModels');

const gamesControllers = {
    cGetAllGames: async (req, res) => {
        try {
            const games = await Games.getAllGames();
            res.json({
                success: true,
                data: games
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching games',
                error: error.message
            });
        }
    },

    cGetGameById: async (req, res) => {
        try {
            const games = await Games.getGameById(req.params.id);
            if (!games) {
                return res.status(404).json({
                    success: false,
                    message: 'Game not found'
                });
            }
            res.json({
                success: true,
                data: games
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error fetching game',
                error: error.message
            });
        }
    },

    cAddGame: async (req, res) => {
        try {
            const {
                date, 
                home_team_id, 
                away_team_id, 
                home_score, 
                away_score, 
                status, 
                venue
            } = req.body;
            if (!date || !home_team_id || !away_team_id || !home_score || !away_score ||  !status||  !venue) {
                return res.status(400).json({
                    success: false,
                    message: 'All fields are required'
                });
            }
            const newGames = await Games.addGame({
                date, 
                home_team_id, 
                away_team_id, 
                home_score, 
                away_score, 
                status, 
                venue
            });
            res.status(201).json({
                success: true,
                message: 'Game added successfully',
                data: newGames
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error adding game',
                error: error.message
            });
        }
    },

    cUpdateGame: async (req, res) => {
        try {
            const {
                date, 
                home_team_id, 
                away_team_id, 
                home_score, 
                away_score, 
                status, 
                venue
            } = req.body;

            const game = await Games.getGameById(req.params.id);
            if (!game) {
                return res.status(404).json({
                    success: false,
                    message: 'Game not found'
                });
            }
            await Games.updateGame(req.params.id, {
                date, 
                home_team_id, 
                away_team_id, 
                home_score, 
                away_score, 
                status, 
                venue
            });
            res.json({
                success: true,
                message: 'Game updated successfully'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error updating game',
                error: error.message
            });
        }
    },

    cDeleteGame: async (req, res) => {
        try {
            const game = await Games.getGameById(req.params.id);
            if (!game) {
                return res.status(404).json({
                    success: false,
                    message: 'Game not found'
                });
            }
            await Games.deleteGame(req.params.id);
            res.json({
                success: true,
                message: 'Game deleted successfully'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error deleting game',
                error: error.message
            });
        }
    }
};

module.exports = gamesControllers;