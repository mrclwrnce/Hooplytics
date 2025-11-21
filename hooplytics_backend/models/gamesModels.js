const db = require('../database');

const Games = {
    getAllGames: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_games', (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }, 

    getGameById: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tb_games WHERE id = ?', [id], (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });

    },

    addGame: (gameData) => {
        return new Promise((resolve, reject) => {
            const {
            date, home_team_id, away_team_id, home_score, away_score, status, venue
            } = gameData;
            db.query(
                'INSERT INTO tb_games (date, home_team_id, away_team_id, home_score, away_score, status, venue) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [date, home_team_id, away_team_id, home_score, away_score, status, venue],
                (err, results) => {
                    if (err) reject(err);
                    resolve({id: results.insertId, ...gameData});
                }
            );
        });
    },

    updateGame: (id, gameData) => {
        return new Promise((resolve, reject) => {
            const { date, home_team_id, away_team_id, home_score, away_score, status, venue} = gameData;
            db.query(
                'UPDATE tb_games SET date = ?, home_team_id = ?, away_team_id = ?, home_score = ?, away_score = ?, status = ?, venue = ? WHERE id = ?',
                [date, home_team_id, away_team_id, home_score, away_score, status, venue, id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    },

    deleteGame: (id) => {
        return new Promise((resolve, reject) => {
            db.query(
                'DELETE FROM tb_games WHERE id = ?',
                [id],
                (err, results) => {
                    if (err) reject(err);
                    resolve(results);
                }
            );
        });
    }

};

module.exports = Games;