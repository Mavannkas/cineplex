
// CREATE TABLE `Rooms` (
//     `id` INssT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     `number` TINYINT NOT NULL,
//     `seating_capacity` INT NOT NULL,
//     `location` INT NOT NULL,
//     `seat_arrangement` BLOB NOT NULL
//   );

export interface Room {
    id: number;
    number: number;
    seating_capacity: number;
    location: number;
    seat_arrangement: SeatStatus[][] | string;
}

export enum SeatStatus {
    NO_SEAT = 0,
    FREE_SEAT = 1,
    BOOKED_SEAT = 2,
}

export const isRoom = (obj: any): obj is Room => {
    return typeof obj === 'object' && obj.number && obj.seating_capacity && obj.location && obj.seat_arrangement;
}

export const isSeatArrangementArray = (arr: any): arr is SeatStatus[][] => {
    return Array.isArray(arr) && arr.every(row => Array.isArray(row) && row.every(seat => typeof seat === 'number' && seat >= 0 && seat <= 2));
}