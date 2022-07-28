import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from './storeSlice'

const initialState = {
    error: '',
    response: null,
    isLoading: true,
}

export const editFruit = createAsyncThunk(
    'fruit/editFruit',
    async ({ data, id }, { dispatch }) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_SERVER_BASE_URL}/api/fruits/${id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            ).then((res) => dispatch(getProducts()))
            return response.json()
        } catch (err) {
            throw err
        }
    }
)

const editFruitSlice = createSlice({
    name: 'editFruit',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(editFruit.pending, state => {
                state.isLoading = true
            })
            .addCase(editFruit.fulfilled, (state, action) => {
                state.isLoading = false
                state.response = action.payload
            })
            .addCase(editFruit.rejected, (state, action) =>  {
                state.isLoading = false
                state.response = action.payload
                state.error = 'Qualcosa è andato storto'
            })
    }
})

export const editResponse = state => state.editFruit.response
export const editError = state => state.editFruit.error
export default editFruitSlice.reducer