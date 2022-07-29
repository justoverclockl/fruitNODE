import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    registerUserResponse: '',
    registerUserError: '',
    responseFromApi: null,
    isLoading: false,
}

export const addUserToDatabase = createAsyncThunk(
    'register/registerUser',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_BASE_URL}/api/users`,
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

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addUserToDatabase.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addUserToDatabase.fulfilled, (state, action) => {
                state.isLoading = false
                state.responseFromApi = action.payload
                state.registerUserResponse = 'Ti sei registrato con successo!'
            })
            .addCase(addUserToDatabase.rejected, (state, action) => {
                state.isLoading = false
                state.responseFromApi = action.payload
                state.registerUserError =
                    'Impossibile completare la registrazione'
            })
    },
})

export const registerSuccess = (state) => state.users.registerUserResponse
export const registerError = (state) => state.users.registerUserError
export const apiResponse = (state) => state.users.responseFromApi
export default userSlice.reducer
