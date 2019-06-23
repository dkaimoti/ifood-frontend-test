export const getFields = () => {
    return dispatch => {
        const URL = `${process.env.REACT_APP_FILTER_MOCK}`;
        fetch(URL, { method: "GET" })
            .then(response => response.json())
            .then(response => dispatch({
                type: 'GOT_FIELDS',
                payload: response
            }))
    }
}
