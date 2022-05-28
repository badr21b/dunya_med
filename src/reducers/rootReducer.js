const initialState = {
    counter: 10,
    language: navigator.language || navigator.userLanguage
}

function rootReducer (state= initialState, action){
    switch (action.type){
        case "INCREMENT":
            return {counter: state.counter + 1};
        case "DECREMENT":
            return {counter: state.counter - 1};
        default:
            return state;
    }
}

export default rootReducer;
