import React from 'react'
import Shipped from '../assets/shipped.gif'

const OrderShippedPopup = () => {
    return (
        <div className="h-screen w-screen fixed top-1/2 flex items-center left-1/2 transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-md z-30 hover:scale-110 duration-1000">
            <div className="flex flex-col justify-center items-center inset-x-0 shadow-xl bg-green-500 text-green-800 w-[500px] h-[600px] mx-auto -mt-1 rounded-xl">
                <h1 className="font-bold text-2xl text-white mb-4">
                    Il tuo ordine è stato evaso... 😊
                </h1>
                <img src={Shipped} alt="ordine evaso" className="w-[full]" />
                <h1 className="font-bold text-xl text-white mb-4 mt-4">
                    Torna presto a fare acquisti sul nostro store!
                </h1>
            </div>
        </div>
    )
}

export default OrderShippedPopup
