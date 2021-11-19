//we cannot change the state directly we will always return new state in reducer which is a pure function

export default function movies(state =["DDLJ","RA-ONE","SPIDERMAN"],action){
    if(action.type==="Add_Movies"){
        return action.movies;
    }
    return state;
}