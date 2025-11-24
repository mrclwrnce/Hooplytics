const express = require('express');
const cors = require('cors');
const teamRoutes = require('./routes/teamRoutes');
const playerRoutes = require('./routes/playerRoutes');
const gamesRoutes = require('./routes/gamesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/games', gamesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});