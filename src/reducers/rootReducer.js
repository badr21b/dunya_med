const initialState = {
    counter: 10,
    language: setLanguage( navigator.language || navigator.userLanguage )
}

function setLanguage(currentLanguage){
    if(currentLanguage.includes('en')){
        return "en"
    } else if(currentLanguage.includes('fr')){
        return "fr"
    } if(currentLanguage.includes('tr')){
        return "tr"
    } else {
        return "fr"
    }
}

function rootReducer (state= initialState, action){
    switch (action.type){
        case "SET_LANGUAGE":
            console.log(action)
            return {language: action.language};
        case "INCREMENT":
            return {counter: state?.counter + 1};
        case "DECREMENT":
            return {counter: state?.counter - 1};
        default:
            return state;
    }
}

export default rootReducer;
