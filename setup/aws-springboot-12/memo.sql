CREATE TABLE `memo` (
  `id` bigint(20) NOT NULL,
  `contents` varchar(4000) NOT NULL,
  `title` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;