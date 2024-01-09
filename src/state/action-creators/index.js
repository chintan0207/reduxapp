export const depositMoney = (amount) =>{
    return (dispatch) => {
        dispatch({
            type:"deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type:"withdraw",
            payload: amount
        })
    }
}


export const increment = (value) =>{
        return (dispatch) => {
            dispatch({
                type:"increment",
                payload: value
            })
        }
}

export const Decrement = (value) =>{
    return (dispatch) => {
        dispatch({
            type:"decrement",
            payload: value
        })
    }
}