import Genre from "../types/Genre";

const mapGenre = (genreId:number):string => {

    switch (genreId) {
        case 28:
            return Genre.ACTION;
        case 12:
            return Genre.ADVENTURE;
        case 16:
            return Genre.ANIMATION;
        case 35:
            return Genre.COMEDY;
        case 80:
            return Genre.CRIME;
        case 99:
            return Genre.DOCUMENTRY;
        case 18:
            return Genre.DRAMA;
        case 10751:
            return Genre.FAMILY;
        case 14:
            return Genre.FANTASY;
        case 36:
            return Genre.HISTORY;
        case 27:
            return Genre.HORROR;
        case 10402:
            return Genre.MUSIC;
        case 9648:
            return Genre.MYSTERY;
        case 10749:
            return Genre.ROMANCE;
        case 878:
            return Genre.SCI_FI;
        case 10770:
            return Genre.TV;
        case 53:
            return Genre.THRILLER;
        case 10752:
            return Genre.WAR;
        case 37:
            return Genre.WESTERN;
        default:
            return "";
    } 

}

export default mapGenre;