import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: [],
    registeredUsers: 0,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: (state, action) => {
            state.registeredUsers += 1
            state.userData.push({
                ...action.payload,
                id: state.registeredUsers,
            })
        },
    },
})

export const { register } = userSlice.actions
export const selectUser = (state) => state.users.userData
export default userSlice.reducer
