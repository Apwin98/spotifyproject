
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // token: "BQD5DPhrPiDIJFeLf-ZCvZhdGVo_Zl5DPuRlV6aFQqCx4hKVswt15adsBEDbs1CSelZx8a2JkLpiQIzMuBJpRsrEjGQv0Ul7YdnqbXPuOGfVGCPMAc56-teTPqZWqsJ-Ac5oB_yHBQKRn1Gib7DfTn_IBfAG56DooCCUbFszKI2SRJ9NmbjY_b6lLRLg14t6NvJX9MlAz9SSMtP2n0RPm8vx_wLHxVoB5bvUQX70T_4ontTK4dM7fDtn6UfUwn_R62Yv6Wyae64ksmg52kC63yEi62Q"

};

const reducer = (state, action) => {
    // console.log(action)

    // ACTION -> type, [payload]

    switch(action.type) { 
        case 'SET_TOKEN': {
            return {
                ...state,
                token: action.token
            }
        }
        case 'SET_USER': {
            return{
                ...state,
                user: action.user
            }
        }
        case 'SET_PLAYLISTS': {
            return{
                ...state,
                playlists: action.playlists,
            }
        }

        default :
            return state;
    
    }
};

export default reducer;