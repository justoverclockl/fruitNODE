import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    itemInCart: 0,
    totalAmount: 0,
    showPopup: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        insertInCart: (state, action) => {
            state.itemInCart += 1
            const fruitExist = state.cart.findIndex(
                (fruit) => fruit.name === action.payload.name
            )
            if (fruitExist >= 0) {
                state.cart[fruitExist].quantity += 1
                state.cart[fruitExist].price =
                    Number(action.payload.price.replace(/,/g, '.')).toFixed(2) *
                    state.cart[fruitExist].quantity
            } else {
                const price = Number(
                    action.payload.price.replace(/,/g, '.')
                ).toFixed(2)
                state.cart.push({
                    ...action.payload,
                    price,
                    unitaryPrice: action.payload.price,
                })
            }
            state.totalAmount = state.cart
                .map((price) => {
                    return Number(price.price)
                })
                .reduce((acc, curr) => acc + curr, 0)
        },
        removeFromCart: (state, action) => {
            state.itemInCart -= 1
            const fruitExist = state.cart.findIndex(
                (fruit) => fruit.name === action.payload.name
            )
            if (fruitExist >= 0) {
                state.cart[fruitExist].quantity -= 1
                state.cart[fruitExist].price =
                    Number(
                        state.cart[fruitExist].unitaryPrice.replace(/,/g, '.')
                    ) * state.cart[fruitExist].quantity
                if (state.cart[fruitExist].quantity === 0) {
                    state.cart.splice(fruitExist, 1)
                }
            }
            state.totalAmount = state.cart
                .map((price) => {
                    return Number(price.price)
                })
                .reduce((acc, curr) => acc + curr, 0)
        },
        resetCart: (state) => {
            state.cart = []
            state.itemInCart = 0
            state.totalAmount = 0
        },
    },
})

export const { insertInCart } = cartSlice.actions
export const { removeFromCart } = cartSlice.actions
export const { resetCart } = cartSlice.actions
export const productsInCart = (state) => state.cart.cart
export const totalPrice = (state) => state.cart.totalAmount
export const cartTotalItems = (state) => state.cart.itemInCart
export default cartSlice.reducer
