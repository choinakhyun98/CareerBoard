const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = {
    userState: false
};

const userLoginOut = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                userState: true,
            };
        case LOGOUT:
            return{
                ...state,
                userState: false,
            }
        default:
            return {
                ...state,
                userState: false,
            };
    }
}

export default userLoginOut;
