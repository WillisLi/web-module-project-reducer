export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_CURRENT = "SET_CURRENT";
export const SET_MEMORY = "SET_MEMORY";
export const RESET_MEMORY = "RESET_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const setCurrentMemory = () => {
    return({type:SET_CURRENT})
}

export const setMemory = () => {
    return({type:SET_MEMORY})
}

export const zeroMemory = () => {
    return({type:RESET_MEMORY})
}