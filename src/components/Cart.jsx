import React, { useState } from 'react'
import { useRef } from 'react'
import { v4 as randomId } from 'uuid'
import emptyCart from '../assets/empty-cart.png'
import CloseIcon from '@mui/icons-material/Close'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import PointOfSaleSharpIcon from '@mui/icons-material/PointOfSaleSharp'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart'
import toast, { Toaster } from 'react-hot-toast'
import {
    productsInCart,
    totalPrice,
    cartTotalItems,
    removeFromCart,
    resetCart,
} from '../states/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import OrderShippedPopup from './OrderShippedPopup'

const Cart = ({ setPopup }) => {
    const dispatch = useDispatch()
    const insideCart = useSelector(productsInCart)
    const getTotalPrice = useSelector(totalPrice)
    const totalItemsInCart = useSelector(cartTotalItems)
    const popupDiv = useRef(null)
    const [orderShippedPopup, setOrderShippedPopup] = useState(false)

    const removedFromCart = () => {
        toast.success('Prodotto rimosso dal carrello!', {
            style: {
                borderRadius: '10px',
                background: '#911515',
                color: '#fff',
            },
        })
    }

    return (
        <div className="h-screen w-screen fixed top-1/2 flex items-center left-1/2 backdrop-blur-sm transform -translate-y-1/2 -translate-x-1/2 backdrop-brightness-[.2] z-30">
            <Toaster position="bottom-right" reverseOrder={false} />
            <div
                className="fixed z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-100 shadow-xl w-fit min-w-[500px] h-fit p-4 rounded-xl"
                ref={popupDiv}
            >
                <div>
                    <div className="text-right text-black">
                        <CloseIcon onClick={() => setPopup(false)} />
                    </div>
                    <h1 className="text-gray-600 font-bold text-2xl text-center mb-12">
                        {totalItemsInCart <= 0
                            ? 'Il tuo carrello è vuoto'
                            : 'Prodotti nel Carrello'}
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    {totalItemsInCart === 0 ? (
                        <img
                            className="w-[300px]"
                            src={emptyCart}
                            alt="carrello vuoto"
                        />
                    ) : (
                        false
                    )}
                </div>
                <div className="mx-4 mt-4 mb-4 text-gray-700 flex items-center justify-between">
                    <div className="min-w-[150px]">Articolo</div>
                    <div>Quantità</div>
                    <div>Prezzo</div>
                    <div>Rimuovi</div>
                </div>
                {insideCart.map((product) => {
                    return (
                        <div
                            data-code={product.buyId}
                            key={randomId()}
                            className="mx-4 text-gray-700 flex items-center justify-between"
                        >
                            <div className="flex flex-row items-center flex-wrap min-w-[150px]">
                                <img
                                    className="rounded-[100%] w-[50px] mr-2"
                                    src={product.image}
                                    alt={product.name}
                                />
                                {product.name}
                            </div>
                            <div className="flex">{product.quantity}</div>
                            <div className="font-bold min-w-[45px] text-right">
                                {product.price}€
                            </div>
                            <button
                                onClick={() => [
                                    removedFromCart(),
                                    dispatch(removeFromCart(product)),
                                ]}
                            >
                                <DeleteForeverIcon />
                            </button>
                        </div>
                    )
                })}
                <div className="mx-4 mt-8 font-bold text-gray-700 flex flex-col items-center justify-between">
                    <div className="bg-green-700 w-full text-white text-center p-2 rounded-lg">
                        Totale: {getTotalPrice} €
                    </div>
                    <div className="flex flex-row w-full">
                        <button
                            className="bg-amber-500 hover:bg-amber-600 p-3 mt-4 w-full text-white rounded-lg mr-2"
                            onClick={() => [
                                setOrderShippedPopup(true),
                                dispatch(resetCart()),
                                setTimeout(() => {
                                    setOrderShippedPopup(false)
                                    setPopup(false)
                                }, 4000),
                            ]}
                        >
                            <PointOfSaleSharpIcon /> Paga Ora
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 p-3 mt-4 w-full text-white rounded-lg"
                            onClick={() => dispatch(resetCart())}
                        >
                            <RemoveShoppingCartIcon /> Svuota Carrello
                        </button>
                    </div>
                </div>
                {orderShippedPopup && <OrderShippedPopup />}
            </div>
        </div>
    )
}

export default Cart
