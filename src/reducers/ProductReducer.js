const Initial = {
    carts: []
};

const ProductReducer = (state = Initial, action) => {
    switch (action.type) {
        case "ADD_Card":
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            }
            else {
                const temp = {
                    ...action.payload, qnty: 1
                }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case "Remove_Card":
            const data = state.carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: data
            }
        case "Remove_item":
            const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[itemIndex_dec].qnty >= 1) {
                const dltItems = state.carts[itemIndex_dec].qnty -= 1
                console.log([...state.carts, dltItems]);
                return {
                    ...state,
                    carts: [...state.carts]
                }

            } else if (state.carts[itemIndex_dec].qnty === 1) {
                const data = state.carts.filter((item) => item.id !== action.payload.id);
                return {
                    state,
                    carts: data
                }
            }
        default:
            return state
    }
}
export default ProductReducer;