export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:"BQDRbbpvVF0KhP6Q0l1HpbH1Eo7wFnMQdQ1hzFwT75TT0ak5N_jxA384yft3jxt8d4AM51pzjlT7ZocianqLhRxjwZr8Zihcwqx4aUu2lzWxrWI7nFTpf9Tw5G9_g_I4fk77qCAgMWWOkvDT3nmXLU0NleRWq8chrzyBKsKSLTDSEi3iUFb7"
};
  const reducer=(state,action)=>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            };
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly:action.discover_weekly,
                };
        default:
            return state;

    }
};
export default  reducer