export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload
            }

        case "LOGOUT":
            return {
                ...state,
                user: undefined
            }


        default:
            state;
    }

}
