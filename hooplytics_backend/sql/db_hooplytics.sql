-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2025 at 07:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hooplytics`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_games`
--

CREATE TABLE `tb_games` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `home_team_id` int(11) NOT NULL,
  `away_team_id` int(11) NOT NULL,
  `home_score` int(11) NOT NULL,
  `away_score` int(11) NOT NULL,
  `status` enum('Scheduled','Finished','Canceled') NOT NULL,
  `venue` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_games`
--

INSERT INTO `tb_games` (`id`, `date`, `home_team_id`, `away_team_id`, `home_score`, `away_score`, `status`, `venue`, `created_at`) VALUES
(1, '2025-11-21', 1, 2, 67, 70, 'Finished', 'T-Mobile Arena', '2025-11-19 17:18:13');

-- --------------------------------------------------------

--
-- Table structure for table `tb_players`
--

CREATE TABLE `tb_players` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `position` enum('PG','SG','SF','PF','C') NOT NULL,
  `height` varchar(10) NOT NULL,
  `weight` int(11) NOT NULL,
  `jersey_number` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `status` enum('Active','Injured','Retired','') NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_players`
--

INSERT INTO `tb_players` (`id`, `first_name`, `last_name`, `position`, `height`, `weight`, `jersey_number`, `team_id`, `status`, `created_at`) VALUES
(1, 'Jalen', 'Brunson', 'PG', '6\'2', 190, 11, 1, 'Injured', '2025-11-19 16:09:24'),
(2, 'T.J', 'McConnell', 'PG', '6\'1', 190, 9, 2, 'Active', '2025-11-19 17:16:01');

-- --------------------------------------------------------

--
-- Table structure for table `tb_teams`
--

CREATE TABLE `tb_teams` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `coach` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_teams`
--

INSERT INTO `tb_teams` (`id`, `name`, `city`, `coach`, `created_at`) VALUES
(1, 'New York Knicks', 'New York', 'Mike Brown', '2025-11-19 16:01:29'),
(2, 'Indiana Pacers', 'Indianapolis', 'Rick Carlisle', '2025-11-19 16:07:00'),
(4, 'Golden State Warriors', 'San Francisco', 'Steve Kerr', '2025-11-20 21:38:47'),
(5, 'Los Angeles Lakers', 'Los Angeles', 'JJ Redrick', '2025-11-20 21:42:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_games`
--
ALTER TABLE `tb_games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_players`
--
ALTER TABLE `tb_players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_teams`
--
ALTER TABLE `tb_teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_games`
--
ALTER TABLE `tb_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_players`
--
ALTER TABLE `tb_players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_teams`
--
ALTER TABLE `tb_teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
