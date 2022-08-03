import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from './storeSlice'

const initialState = {
    error: '',
    response: null,
    isLoading: false,
}

export const deleteFruit = createAsyncThunk(
    'fruit/editFruit',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_BASE_URL}/api/fruits/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            ).then((res) => dispatch(getProducts()))
            return response.json()
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteFruitSlice = createSlice({
    name: 'deleteFruit',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(deleteFruit.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteFruit.fulfilled, (state, action) => {
                state.isLoading = false
                state.response = action.payload
            })
            .addCase(deleteFruit.rejected, (state, action) => {
                state.isLoading = false
                state.response = action.payload
                state.error = 'Impossibile eliminare il frutto dal database.'
            })
    },
})

export default deleteFruitSlice.reducer
