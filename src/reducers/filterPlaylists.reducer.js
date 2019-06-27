const userLang = navigator.language || navigator.userLanguage; 
const today = new Date();
const INITIAL_STATE = {
    'locale': userLang.replace('-', '_'),
    'country': 'BR',
    'timestamp': today.toISOString(),
    'limit': '10',
    'offset': '1'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FILTER_VALUE_CHANGED':
            let value = action.payload.value;
            if(action.payload.id ==="timestamp") {
                value = new Date(action.payload.value).toISOString()
            }
            return { ...state, [action.payload.id]: value }
        default:
            return state
    }
}