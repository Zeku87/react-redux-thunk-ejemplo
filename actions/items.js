export function hasErrored(bool){
    return{
        type: 'ERROR',
        hasErrored:bool
    }
}

export function isLoading(bool){
    return {
        type: 'LOADING',
        isLoading: bool
    }
}

export function itemsDataFetched(items){
    return {
        type: "OK",
        items
    }
}

export function itemsFetchData(url){
    return (dispatch) => {
        dispatch(isLoading(true))
        fetch(url)
            .then( response => response.json() )
            .then( items =>
                dispatch(itemsDataFetched(items)) 
            )
            .catch( error =>
                dispatch(hasErrored(true))    
            )
    }
}