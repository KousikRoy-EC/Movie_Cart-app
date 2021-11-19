//we cannot change the state directly we will always return new state in reducer

export default function movies(state =[],action){
    if(action.type==="Add_Movies"){
        return action.movies;
    }
    return state;
}