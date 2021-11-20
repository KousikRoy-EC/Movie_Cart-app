//action is nothing but plain javascript obj with type of operation to be performed 

// {
//     type: "Increment_count",
//     movie:"movie"
// }

//action type
export const Add_Movies = "Add_Movies";
export const Add_Favourite = "Add_Favourite";
export const Rem_Fav = "Rem_Fav";
export const setshow = "setSHOW";
//action creator
export function addmovies(movies) {
    return {
        type: "Add_Movies",
        movies :movies
    }
}

export function addfavourite(movie) {
    return {
        type: "Add_Favourite",
        movie
    }
}


export function remfavourite(movie) {
    return {
        type: "Rem_Fav",
        movie
    }
}



export function setSHOW(val) {
    return {
        type: "setSHOW",
        val
    }
}