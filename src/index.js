import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './states/storeSlice'
import usersReducer from './states/registerSlice'
import cartReducer from './states/cartSlice'
import addFruitReducer from './states/addProductSlice'
import loginReducer from './states/loginSlice'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    products: productsReducer,
    users: usersReducer,
    cart: cartReducer,
    addFruit: addFruitReducer,
    auth: loginReducer,
})

const store = configureStore({
    reducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
