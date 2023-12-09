CREATE TABLE `Locations` (
  `id` INT PRIMARY KEY NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL
);

CREATE TABLE `Movies` (
  `id` INT PRIMARY KEY NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `minimum_age` TINYINT NOT NULL,
  `production_year` TINYINT NOT NULL,
  `duration` TINYINT NOT NULL,
  `director` VARCHAR(255) NOT NULL,
  `production_country` VARCHAR(255) NOT NULL,
  `premiere_date` DATE,
  `cast` TEXT
);

CREATE TABLE `Languages` (
  `id` INT PRIMARY KEY NOT NULL,
  `short_name` VARCHAR(10) NOT NULL,
  `full_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `PresentationTypes` (
  `id` INT PRIMARY KEY NOT NULL,
  `language` INT NOT NULL,
  `subtitles` BOOLEAN NOT NULL,
  `subtitle_language` INT NOT NULL
);

CREATE TABLE `Genres` (
  `id` INT PRIMARY KEY NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT
);

CREATE TABLE `RoomTypes` (
  `id` INT PRIMARY KEY NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT
);

CREATE TABLE `Events` (
  `id` INT PRIMARY KEY NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `date` DATE,
  `event_type` INT NOT NULL
);

CREATE TABLE `EventTypes` (
  `id` INT PRIMARY KEY NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT
);

CREATE TABLE `Rooms` (
  `id` INT PRIMARY KEY NOT NULL,
  `number` TINYINT NOT NULL,
  `seating_capacity` INT NOT NULL,
  `location` INT NOT NULL,
  `seat_arrangement` BLOB NOT NULL
);

CREATE TABLE `Screenings` (
  `id` INT PRIMARY KEY NOT NULL,
  `presentation_type` INT NOT NULL,
  `room` INT NOT NULL,
  `time` DATETIME,
  `date` DATE,
  `price` DECIMAL,
  `movie_id` INT NOT NULL
);

CREATE TABLE `Tickets` (
  `id` INT PRIMARY KEY NOT NULL,
  `type` INT NOT NULL,
  `owner` VARCHAR(255) NOT NULL,
  `purchase_time` TIMESTAMP,
  `screening_id` INT NOT NULL,
  `seat` VARCHAR(255) NOT NULL
);

CREATE TABLE `TicketTypes` (
  `id` INT PRIMARY KEY NOT NULL,
  `description` TEXT,
  `discounted` BOOLEAN NOT NULL,
  `discount_amount` DECIMAL
);

CREATE TABLE `Movies_Genres` (
  `Movies_id` INT,
  `Genres_id` INT,
  PRIMARY KEY (`Movies_id`, `Genres_id`)
);

ALTER TABLE `Movies_Genres` ADD FOREIGN KEY (`Movies_id`) REFERENCES `Movies` (`id`);

ALTER TABLE `Movies_Genres` ADD FOREIGN KEY (`Genres_id`) REFERENCES `Genres` (`id`);


CREATE TABLE `Movies_PresentationTypes` (
  `Movies_id` INT,
  `PresentationTypes_id` INT,
  PRIMARY KEY (`Movies_id`, `PresentationTypes_id`)
);

ALTER TABLE `Movies_PresentationTypes` ADD FOREIGN KEY (`Movies_id`) REFERENCES `Movies` (`id`);

ALTER TABLE `Movies_PresentationTypes` ADD FOREIGN KEY (`PresentationTypes_id`) REFERENCES `PresentationTypes` (`id`);


ALTER TABLE `PresentationTypes` ADD FOREIGN KEY (`language`) REFERENCES `Languages` (`id`);

ALTER TABLE `PresentationTypes` ADD FOREIGN KEY (`subtitle_language`) REFERENCES `Languages` (`id`);

CREATE TABLE `Events_Screenings` (
  `Events_id` INT,
  `Screenings_id` INT,
  PRIMARY KEY (`Events_id`, `Screenings_id`)
);

ALTER TABLE `Events_Screenings` ADD FOREIGN KEY (`Events_id`) REFERENCES `Events` (`id`);

ALTER TABLE `Events_Screenings` ADD FOREIGN KEY (`Screenings_id`) REFERENCES `Screenings` (`id`);


ALTER TABLE `Events` ADD FOREIGN KEY (`event_type`) REFERENCES `EventTypes` (`id`);

ALTER TABLE `Rooms` ADD FOREIGN KEY (`location`) REFERENCES `Locations` (`id`);

CREATE TABLE `Rooms_RoomTypes` (
  `Rooms_id` INT,
  `RoomTypes_id` INT,
  PRIMARY KEY (`Rooms_id`, `RoomTypes_id`)
);

ALTER TABLE `Rooms_RoomTypes` ADD FOREIGN KEY (`Rooms_id`) REFERENCES `Rooms` (`id`);

ALTER TABLE `Rooms_RoomTypes` ADD FOREIGN KEY (`RoomTypes_id`) REFERENCES `RoomTypes` (`id`);


ALTER TABLE `Screenings` ADD FOREIGN KEY (`room`) REFERENCES `Rooms` (`id`);

ALTER TABLE `Screenings` ADD FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`);

ALTER TABLE `Screenings` ADD FOREIGN KEY (`presentation_type`) REFERENCES `PresentationTypes` (`id`);

ALTER TABLE `Tickets` ADD FOREIGN KEY (`screening_id`) REFERENCES `Screenings` (`id`);

ALTER TABLE `Tickets` ADD FOREIGN KEY (`type`) REFERENCES `TicketTypes` (`id`);
