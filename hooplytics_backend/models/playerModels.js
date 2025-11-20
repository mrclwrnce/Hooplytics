const db = require('../database');

const Players = {
    getAllPlayers: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_players', (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }, 

    getPlayerById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_players WHERE id = ?', [id], (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });

    },

    addPlayer: (playerData) => {
        return new Promise((resolve, reject) => {
            const {
            first_name, last_name, position, height, weight, jersey_number, team_id, status
            } = playerData;
            db.query(
                'INSERT INTO tb_players (first_name, last_name, position, height, weight, jersey_number, team_id, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [first_name, last_name, position, height, weight, jersey_number, team_id, status],
                (err, results) => {
                    if (err) reject(err);
                    resolve({id: results.insertId, ...playerData});
                }
            );
        });
    },

    updatePlayer: (id, playerData) => {
        return new Promise((resolve, reject) => {
            const { first_name, last_name, position, height, weight, jersey_number, team_id, status } = playerData;
            db.query(
                'UPDATE tb_players SET first_name = ?, last_name = ?, position = ?, height = ?, weight = ?, jersey_number = ?, team_id = ?, status = ? WHERE id = ?',
                [first_name, last_name, position, height, weight, jersey_number, team_id, status, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    deletePlayer: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                'DELETE FROM tb_players WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    }

};

module.exports = Players;