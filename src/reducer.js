export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQAS9qMnqARUkX40F_JPrIKjAgB9Gdvx8reuRkKxmCxRliBj0PyEqbDgPnzCK19-F_MQXxhIhvjmSW-kIkDLZaIOwVwTJKNfuRlFSZSI9JpEj1pwhYIpQOnwfKCVYZ49Jec2YnlCfVrejqqzSFkGepE-M1xk7GKPu5Va9EIwx37EmWXn',

}

const reducer = (state, action) =>{
    console.log(action);
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user, 
             };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;