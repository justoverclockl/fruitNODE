import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loginData: null,
    isLoading: false,
    sessionData: null,
    isLoggedIn: false,
    email: '',
}

export const loginToStore = createAsyncThunk(
    'login/loginAuth',
    async (payload, { rejectWithValue }) => {
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
            return rejectWithValue(err.response.data)
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
                state.email = actualStatus.email
                state.isLoggedIn = true
                sessionStorage.setItem(
                    'authSession',
                    JSON.stringify({
                        userEmail: actualStatus.email,
                    })
                )
            }
        },
        getSession: (state, action) => {
            const session = sessionStorage.getItem('authSession')
            state.sessionData = JSON.parse(session)
        },
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

export const { saveSession, getSession } = loginAuthSlice.actions
export const authData = (state) => state.auth.loginData
export const session = (state) => state.auth.sessionData
export default loginAuthSlice.reducer
