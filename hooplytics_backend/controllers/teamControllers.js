const Teams = require('../models/teamModels');

const teamControllers = {

    cGetAllTeams: async (req, res) => {
    try {
      const teams = await Teams.getAllTeams();
      res.json({
        success: true,
        data: teams
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching teams',
        error: error.message
      });
    }
  },

  cGetTeamById: async (req, res) => {
    try {
      const teams = await Teams.getTeamById(req.params.id);
      if (!teams) {
        return res.status(404).json({
          success: false,
          message: 'Team not found'
        });
      }
      res.json({
        success: true,
        data: teams
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching team',
        error: error.message
      });
    }
  },

  cCreateTeam: async (req, res) => {
    try {
      const { name, city, coach } = req.body;

      if (!name || !city || !coach) {
        return res.status(400).json({
          success: false,
          message: 'All fields (name, city, coach) are required'
        });
      }

      const newTeam = await Teams.addTeam({
        name,
        city,
        coach
      });

      res.status(201).json({
        success: true,
        message: 'Team created successfully',
        data: newTeam
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error creating team',
        error: error.message
      });
    }
  },

  cUpdateTeam: async (req, res) => {
    try {
      const { name, city, coach } = req.body;
      const teamId = req.params.id;

      const existingTeam = await Teams.getTeamById(teamId);
      if (!existingTeam) {
        return res.status(404).json({
          success: false,
          message: 'Team not found'
        });
      }

      if (!name || !city || !coach) {
        return res.status(400).json({
          success: false,
          message: 'All fields (name, city, coach) are required'
        });
      }

      await Teams.updateTeam(teamId, {
        name,
        city,
        coach
      });

      res.json({
        success: true,
        message: 'Team updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating team',
        error: error.message
      });
    }
  },

  cDeleteTeam: async (req, res) => {
    try {
      const teamId = req.params.id;

      const existingTeam = await Teams.getTeamById(teamId);
      if (!existingTeam) {
        return res.status(404).json({
          success: false,
          message: 'Team not found'
        });
      }

      await Teams.deleteTeam(teamId);

      res.json({
        success: true,
        message: 'Team deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error deleting Team',
        error: error.message
      });
    }
  },

  cGetPlayersByTeamId: async (req, res) => {
    try {
      const teamId = req.params.id;
      const players = await Teams.getPlayersByTeamId(teamId);
      res.json({
        success: true,
        data: players
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching players for the team',
        error: error.message
      });
    }
  }

};

module.exports = teamControllers;