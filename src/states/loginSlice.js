import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loginData: null,
    isLoading: false,
}

export const loginToStore = createAsyncThunk(
    'login/loginAuth',
    async (payload) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_BASE_URL}/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            )
            return response.json()
        } catch (err) {
            throw err
        }
    }
)

const loginAuthSlice = createSlice({
    name: 'login/authLogin',
    initialState,
    reducers: {
        saveSession: (state, action) => {
            const actualStatus = state.loginData
            if (actualStatus.statusCode === 200) {
                sessionStorage.setItem('authSession', JSON.stringify({
                    userEmail: actualStatus.email
                }))
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginToStore.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginToStore.fulfilled, (state, action) => {
                state.isLoading = false
                state.loginData = action.payload
            })
            .addCase(loginToStore.rejected, (state, action) => {
                state.isLoading = false
                state.loginData = action.payload
            })
    },
})

export const { saveSession } = loginAuthSlice.actions
export const authData = state => state.auth.loginData
export default loginAuthSlice.reducer
