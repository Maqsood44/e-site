export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case "REMOVE_CART_ITEM":
            const filteredCart = state.cart.filter((item) => item.id !== action.payload)

            return {
                ...state,
                cart: filteredCart
            }



        //     console.log("Yeh arha hai", action.payload)

        //     break;




        default:
            state;
    }

}