-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: peggle_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `description` text,
  `power` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (1,'bjorn.jpg','Bjorn Unicorn','Shows which way your ball will bounce!','Super Guide'),(2,'jimmy.jpg','Jimmy Lightning','Throws another ball into the mix!','Multiball'),(3,'kat.jpg','Kat Tut','Attaches an ancient pyramid to the ball bucket!','Pyramid'),(4,'splork.jpg','Splork Sporkan','Uses super advanced alien technology to light up all nearby pegs!','Space Blast'),(5,'claude.jpg','Claude Lobster','Lets you hit the ball like a game where there\'s a ball and you hit it with flippers!','Flippers'),(6,'renfield.jpg','Renfield Pumpkin','Causes the ball to spookily reappear at the top of the screen after falling out the bottom.','Spooky Ball'),(7,'tula.jpg','Tula Sunflower','Uses the power of flowers to light up 20% of remaining orange pegs!','Flower Power'),(8,'warren.jpg','Warren Rabbit','Win either a Magic Hat, Triple Score, a random Magic Power or an extra ball!','Lucky Spin'),(9,'cinderbottom.jpg','Lord Cinderbottom','Big Ball of Fire goes through all pegs!','Fireball'),(10,'hu.jpg','Master Hu','Improves your shot through the power of mindfulness!','Zen Ball'),(11,'marina.jpg','Marina','Energy arcs from the first peg to the Free Ball Bucket!','Electrobolt');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `character_id` int DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `review` text,
  `vote` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `character_id` (`character_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reviews_chk_1` CHECK ((`vote` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,'Alice','Bjorn Unicorn is awesome! Really helpful during the game, gives perfect ball predictions!',5),(2,2,'Bob','Jimmy Lightning is a fun character, but sometimes the balls become a bit too chaotic for my taste.',3),(3,3,'Charlie','Kat Tut adds an interesting twist with the pyramid, but I find it hard to control the ball.',4),(4,4,'David','Splork Sporkan is my favorite! The Space Blast power is amazing for clearing pegs.',5),(5,5,'Eva','Claude Lobster is fun, but the flippers power feels a bit repetitive.',3),(6,6,'Frank','Renfield Pumpkin is spooky! I love how the ball comes back, really adds a challenge.',4),(7,7,'Grace','Tula Sunflower is a great character! Flower Power is super helpful, especially on orange pegs.',5),(8,8,'Henry','Warren Rabbit’s Lucky Spin power is unpredictable, but I enjoy the variety it brings.',4),(9,9,'Ivy','Lord Cinderbottom is a powerhouse! The Fireball clears everything in its path.',5),(10,10,'Jack','Master Hu is a calming presence, Zen Ball improves my focus during gameplay.',4),(11,11,'Kim','Marina’s Electrobolt power is very useful, especially for clearing multiple pegs at once!',4);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-08 17:16:14
