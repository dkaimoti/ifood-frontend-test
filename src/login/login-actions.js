export const updateUserState = (user) => {
    return { 
        type: 'USER_AUTHENTICATED',
        payload: user
    }
}
