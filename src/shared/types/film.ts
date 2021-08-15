interface Film{
    id: number;
    adult: boolean;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    backdrop_path: string;
    poster_path: string;
    vote_average: number;
    original_language: string;
    genre_ids: number[];
}

export default Film;