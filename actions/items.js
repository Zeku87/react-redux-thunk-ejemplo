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

export function data(items){
    console.log("ITEMS action: ",items);
    return {
        type: "OK",
        items
    }
}

export function itemsFetchData(url) {
    console.log("url: ", url)
    return (dispatch) => {
        dispatch(isLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                
                console.log("ITEMS: ",items);
                dispatch(data(items))})
            .catch(() => dispatch(hasErrored(true)));
    };
}