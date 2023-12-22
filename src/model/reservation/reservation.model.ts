export interface ReservationParams {
    type: number;
    screening_id: number;
    seat: `${string},${string}`;
    owner: string;
}