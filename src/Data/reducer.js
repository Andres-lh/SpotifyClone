export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,

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
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            };
        
        case 'SET_PLAYLIST_TRACKS': {
            return {
                ...state,
                playlist_tracks: action.playlist_tracks,
            };
        }
        case 'SET_TRACK': {
            return {
                ...state,
                track: action.track
            };
        }
        case 'SET_START': {
            return {
                ...state,
                recently: action.recently
            };
        } 
        case 'SET_TRACKS': {
            return {
                ...state,
                tracks: action.tracks
            };
        }

        default:
            return state;
    }
}

export default reducer;