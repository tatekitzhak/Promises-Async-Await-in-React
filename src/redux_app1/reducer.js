let initialCalcState = {
    result: 0,
    lastValues: []
};
const initialUserState = {
    username: '',
    address:'',
    age: 0,
    weight: 0,
    number:0
}

export function calculatorReducer(state = initialCalcState, action) {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    } 
    return state;
};

export function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case "SET_USER":
            state = {
                ...state,
                username: action.username,
                age: action.age,
                weight: action.weight
            }
            break;
        case "SET_ADDRESS":
            state = {
                ...state,
                address: action.address,
                number: action.number
            }
            break;
    } 
    return state;
};


