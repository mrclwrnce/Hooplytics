const db = require('../database');
const { get } = require('../routes/playerRoutes');

const Teams = {
    
    getAllTeams: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_teams', (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    },

    getTeamById: (id) => {
        return new Promise((resolve, reject ) => {
            db.query('SELECT * FROM tb_teams WHERE id = ?', [id], (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });
    },

    addTeam: (teamData) => {
        return new Promise((resolve, reject) => {
            const { name, city, coach} = teamData;
            db.query(
                'INSERT INTO tb_teams (name, city, coach) VALUES (?, ?, ?)',
                [name, city, coach],
                (err, results) => {
                    if (err) reject(err);
                    resolve({id: results.insertId, ...teamData});
                }
            );
        });
    },

    updateTeam: (id, teamData) => {
        return new Promise((resolve, reject) => {
            const { name, city, coach} = teamData;
            db.query(
                'UPDATE tb_teams SET name = ?, city = ?, coach = ? WHERE id = ?',
                [name, city, coach, id],
                (err, results) => {
                    if(err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    deleteTeam: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                'DELETE FROM tb_teams WHERE id = ?',
                [id],
                (err, results) => {
                    if(err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    getPlayersByTeamId: (team_id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_players WHERE team_id = ?', [team_id], (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

};

module.exports = Teams;