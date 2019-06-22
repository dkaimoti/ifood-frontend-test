export const getFields = () => {
    return dispatch => {
        const URL = `http://www.mocky.io/v2/5a25fade2e0000213aa90776`;
        fetch(URL, { method: "GET" })
            .then(response => response.json())
            .then(response => dispatch({
                type: 'GOT_FIELDS',
                payload: response
            }))
    }
}
