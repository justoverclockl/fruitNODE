import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from './storeSlice'

const initialState = {
    error: {
        message: '',
        isFailed: false
    },
    response: '',
    isLoading: true,
}

export const addFruitToDatabase = createAsyncThunk(
    'fruit/addFruit',
    async (payload, { dispatch ,rejectWithValue }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_BASE_URL}/api/fruits`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            ).then((res) => dispatch(getProducts()))
            return response.json()
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const addProductSlice = createSlice({
    name: 'addNewProduct',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addFruitToDatabase.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addFruitToDatabase.fulfilled, (state, action) => {
                state.isLoading = false
                state.response = 'Frutto aggiunto con successo al database'
            })
            .addCase(addFruitToDatabase.rejected, (state) => {
                state.isLoading = false
                state.error.message = 'Impossibile aggiungere frutto al database'
                state.error.isFailed = true
            })
    },
})

export const addFruitError = (state) => state.addFruit.error
export const addFruitResponse = (state) => state.addFruit.response
export default addProductSlice.reducer
