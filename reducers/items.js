export function hasErrored(state = false, action){
    action.type === "ERROR" ? action.hasErrored : state
}

export function isLoading(state = false, action){
    action.type === "LOADING" ? action.isLoading : state
}

export function items(state = [], action){
    action.type === "OK" ? action.itemsDataFetched : state
}