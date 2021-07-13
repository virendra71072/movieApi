# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.26)
# Database: productInfo
# Generation Time: 2021-06-22 15:56:08 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE DATABASE IF NOT EXISTS `movieInfo` CHARACTER SET utf8 COLLATE utf8_general_ci;

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `movieId` int(11) NOT NULL,
  `description` text NOT NULL,
  `voteCount` int(11) NOT NULL DEFAULT '0',
  `voteAverage` decimal(10,2) NOT NULL DEFAULT '0.00',
  `popularity` decimal(10,2) NOT NULL DEFAULT '0.00',
  `releaseDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `url`, `image`, `movieId`, `description`, `voteCount`, `voteAverage`, `popularity`, `releaseDate`, `createdAt`) VALUES
(200, 'Black Widow', 'black-widow-497698', 'https://www.themoviedb.org/t/p/w440_and_h660_face//dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg', 497698, 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.', 1572, '8.30', '3568.10', '2021-07-07 00:00:00', '2021-07-12 16:48:35'),
(201, 'The Boss Baby: Family Business', 'the-boss-baby-family-business-459151', 'https://www.themoviedb.org/t/p/w440_and_h660_face//gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg', 459151, 'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.', 458, '8.00', '6327.83', '2021-07-01 00:00:00', '2021-07-12 16:48:35'),
(197, 'Mortal Kombat', 'mortal-kombat-460465', 'https://www.themoviedb.org/t/p/w440_and_h660_face//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg', 460465, 'Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung\'s best warrior, Sub-Zero, seeks out and trains with Earth\'s greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.', 3256, '7.50', '1270.08', '2021-04-07 00:00:00', '2021-07-12 16:43:41'),
(196, 'Spiral: From the Book of Saw', 'spiral-from-the-book-of-saw-602734', 'https://www.themoviedb.org/t/p/w440_and_h660_face//g15PR8eQV9DehSWlagvdnJZqoRq.jpg', 602734, 'Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.', 528, '6.40', '1152.19', '2021-05-12 00:00:00', '2021-07-12 16:43:41'),
(193, 'America: The Motion Picture', 'america-the-motion-picture-739542', 'https://www.themoviedb.org/t/p/w440_and_h660_face//kkXMDMRGtuO9cewtFjWNREC74nf.jpg', 739542, 'A chainsaw-wielding George Washington teams with beer-loving bro Sam Adams to take down the Brits in a tongue-in-cheek riff on the American Revolution.', 58, '5.60', '1376.04', '2021-06-30 00:00:00', '2021-07-12 16:43:41'),
(194, 'Seobok', 'seobok-586047', 'https://www.themoviedb.org/t/p/w440_and_h660_face//yC4DRg5aGgNpkHpUDpLtBqzownS.jpg', 586047, 'A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.', 62, '7.70', '1344.83', '2021-04-12 00:00:00', '2021-07-12 16:43:41'),
(195, 'Army of the Dead', 'army-of-the-dead-503736', 'https://www.themoviedb.org/t/p/w440_and_h660_face//9WlJFhOSCPnaaSmsrv0B4zA8iUb.jpg', 503736, 'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.', 1862, '6.50', '1392.25', '2021-05-14 00:00:00', '2021-07-12 16:43:41'),
(192, 'Awake', 'awake-615658', 'https://www.themoviedb.org/t/p/w440_and_h660_face//3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg', 615658, 'After a sudden global event wipes out all electronics and takes away humankind’s ability to sleep, chaos quickly begins to consume the world. Only Jill, an ex-soldier with a troubled past, may hold the key to a cure in the form of her own daughter. The question is, can Jill safely deliver her daughter and save the world before she herself loses her mind.', 480, '6.10', '1753.26', '2021-06-09 00:00:00', '2021-07-12 16:43:41'),
(188, 'Fast & Furious 10', 'fast-furious-10-385687', 'https://www.themoviedb.org/t/p/w440_and_h660_face/null', 385687, 'The tenth installment in the Fast Saga.', 0, '0.00', '1875.24', '2023-02-01 00:00:00', '2021-07-12 16:43:41'),
(189, 'Cruella', 'cruella-337404', 'https://www.themoviedb.org/t/p/w440_and_h660_face//6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg', 337404, 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.', 3941, '8.40', '2247.24', '2021-05-26 00:00:00', '2021-07-12 16:43:41'),
(190, 'The Conjuring: The Devil Made Me Do It', 'the-conjuring-the-devil-made-me-do-it-423108', 'https://www.themoviedb.org/t/p/w440_and_h660_face//qi6Edc1OPcyENecGtz8TF0DUr9e.jpg', 423108, 'Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they\'d ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.', 2987, '8.00', '1749.37', '2021-05-25 00:00:00', '2021-07-12 16:43:41'),
(191, 'Miraculous World: Shanghai – The Legend of Ladydragon', 'miraculous-world-shanghai-the-legend-of-ladydragon-726684', 'https://www.themoviedb.org/t/p/w440_and_h660_face//rlNnwObbMu5G2FaOUlacnUIdIIA.jpg', 726684, 'On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!', 460, '7.90', '1481.57', '2021-04-04 00:00:00', '2021-07-12 16:43:41'),
(187, 'F9', 'f9-385128', 'https://www.themoviedb.org/t/p/w440_and_h660_face//xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg', 385128, 'Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they\'ve ever encountered: his forsaken brother.', 494, '7.60', '2891.70', '2021-05-19 00:00:00', '2021-07-12 16:43:41'),
(185, 'A Quiet Place Part II', 'a-quiet-place-part-ii-520763', 'https://www.themoviedb.org/t/p/w440_and_h660_face//z2UtGA1WggESspi6KOXeo66lvLx.jpg', 520763, 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.', 1646, '7.80', '2490.21', '2021-05-21 00:00:00', '2021-07-12 16:43:41'),
(186, 'Wrath of Man', 'wrath-of-man-637649', 'https://www.themoviedb.org/t/p/w440_and_h660_face//70AV2Xx5FQYj20labp0EGdbjI6E.jpg', 637649, 'A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman\'s ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.', 1302, '7.80', '2224.33', '2021-04-22 00:00:00', '2021-07-12 16:43:41'),
(181, 'Luca', 'luca-508943', 'https://www.themoviedb.org/t/p/w440_and_h660_face//620hnMVLu6RSZW6a5rwO8gqpt0t.jpg', 508943, 'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.', 2525, '8.10', '4804.44', '2021-06-17 00:00:00', '2021-07-12 16:43:41'),
(182, 'Infinite', 'infinite-581726', 'https://www.themoviedb.org/t/p/w440_and_h660_face//wjQXZTlFM3PVEUmKf1sUajjygqT.jpg', 581726, 'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.', 0, '0.00', '4941.00', '2021-09-08 00:00:00', '2021-07-12 16:43:41'),
(184, 'The Tomorrow War', 'the-tomorrow-war-588228', 'https://www.themoviedb.org/t/p/w440_and_h660_face//yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg', 588228, 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.', 2030, '8.30', '7210.20', '2021-06-30 00:00:00', '2021-07-12 16:43:41'),
(183, 'Godzilla vs. Kong', 'godzilla-vs-kong-399566', 'https://www.themoviedb.org/t/p/w440_and_h660_face//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg', 399566, 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.', 6324, '8.00', '1170.85', '2021-03-24 00:00:00', '2021-07-12 16:43:41'),
(180, 'Peter Rabbit 2: The Runaway', 'peter-rabbit-2-the-runaway-522478', 'https://www.themoviedb.org/t/p/w440_and_h660_face//5HjzYTihkH7EvOWSE7KcsF6pBMM.jpg', 522478, 'Bea, Thomas, and the rabbits have created a makeshift family, but despite his best efforts, Peter can’t seem to shake his mischievous reputation. Adventuring out of the garden, Peter finds himself in a world where his mischief is appreciated, but when his family risks everything to come looking for him, Peter must figure out what kind of bunny he wants to be.', 128, '7.40', '3181.14', '2021-03-25 00:00:00', '2021-07-12 16:43:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;








/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
