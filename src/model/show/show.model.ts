export interface Screening {
    id: number;
    presentation_type: number;
    movie_id: number
    room: number;
    time: string;
    date: string;
    price: string
}

export type Screenings = Screening[];