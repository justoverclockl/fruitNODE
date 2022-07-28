import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: '',
  response: '',
  isLoading: true,
}

export const addFruitToDatabase = createAsyncThunk(
  'fruit/addFruit',
  async (payload) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/fruits`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      return response.json();
    } catch (err) {
      throw err
    }
  }
)

const addProductSlice = createSlice({
  name: 'addNewProduct',
  initialState,
  extraReducers: builder => {
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
        state.error = 'Impossibile aggiungere frutto al database'
      })
  }
})

export const addFruitError = (state) => state.addFruit.error
export const addFruitResponse = (state) => state.addFruit.response
export default addProductSlice.reducer