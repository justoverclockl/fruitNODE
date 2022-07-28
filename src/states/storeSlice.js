import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    fruits: [],
    error: '',
    isLoading: true,
    status: 'idle',
}

export const getProducts = createAsyncThunk('fruit/getFruits', async () => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_SERVER_BASE_URL}/api/fruits`
        )
        return await response.json()
    } catch (err) {
        throw err
    }
})

const storeState = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading'
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isLoading = false
                state.fruits = action.payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = 'failed'
                state.isLoading = false
                state.error = 'Impossibile caricare i dati dal server!'
            })
    },
})

export const selectAllProducts = (state) => state.products.fruits
export const productStatus = (state) => state.products.status
export const loadingState = (state) => state.products.isLoading
export const errorState = (state) => state.products.error
export default storeState.reducer
