-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-08-15 19:33:58
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------
#丢弃数据库，如果它存在的话
DROP  DATABASE  IF  EXISTS  project;

#新建一个数据库
CREATE  DATABASE  project;

#进入指定的数据库
USE  project;

--
-- 表的结构 `advise`
--

CREATE TABLE `advise` (
  `uid` int(11) NOT NULL COMMENT 'auto increment',
  `name` varchar(16) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `options` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `advise`
--

INSERT INTO `advise` (`uid`, `name`, `phone`, `options`) VALUES
(6, 'TOM', '13234324', 'DFSAS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advise`
--
ALTER TABLE `advise`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `advise`
--
ALTER TABLE `advise`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'auto increment', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
