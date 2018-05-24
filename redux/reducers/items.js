export function hasErrored(state = false, action){
    return action.type === "ERROR" ? action.hasErrored : state
}

export function isLoading(state = false, action){
    return action.type === "LOADING" ? action.isLoading : state
}

export function items(state = [], action){
    console.log("REDUCER ITEMS: ", action.items)
    return action.type === "OK" ? action.items : state
}