import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from './storeSlice'

const initialState = {
    errorResponse: '',
    response: '',
    isLoading: true,
}

export const addFruitToDatabase = createAsyncThunk(
    'fruit/addFruit',
    async (payload, { dispatch }) => {
        try {
            return await fetch(
                `${process.env.REACT_APP_SERVER_BASE_URL}/api/fruits`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            ).then((res) => {
                dispatch(getProducts())
                return res
            })
        } catch (err) {
            throw err
        }
    }
)

const addProductSlice = createSlice({
    name: 'addNeFruitToDb',
    initialState,
    reducers: {
        resetResponse: (state, action) => {
            state.response = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addFruitToDatabase.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addFruitToDatabase.fulfilled, (state, action) => {
                state.isLoading = false
                state.response = 'Frutto aggiunto correttamente al database'
            })
            .addCase(addFruitToDatabase.rejected, (state) => {
                state.isLoading = false
                state.errorResponse =
                    'Impossibile aggiungere il frutto al database'
            })
    },
})

export const { resetResponse } = addProductSlice.actions
export const addFruitError = (state) => state.addNewFruit.errorResponse
export const addFruitSuccess = (state) => state.addNewFruit.response
export default addProductSlice.reducer
