const initialState = 20;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payloads;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}
export default changeTheNumber;