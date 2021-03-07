export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users')

    dispatch({
        type: FETCH_USERS,
        payload: res,
    })
}

export const FETCH_CURRENT_USERS = 'FETCH_CURRENT_USERS'

export const fetchCurrentUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user')

    dispatch({
        type: FETCH_CURRENT_USERS,
        payload: res,
    })
}
