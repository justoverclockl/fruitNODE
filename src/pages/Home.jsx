import React from 'react'
import { Link } from 'react-router-dom'
import MainLogo from '../assets/logo-main.png'

const Home = () => {
    return (
        <div className="grid overflow-hidden md:grid-cols-2  gap-4 w-screen h-screen items-center relative">
            <div className="hidden md:block bg-watermelon h-full w-full bg-cover bg-center"></div>
            <div className="flex justify-center items-center"></div>
            <div className="flex justify-center items-center">
                <div className="hidden md:block">
                    <h1 className="font-bold text-5xl mb-2 text-amber-500">
                        La frutta migliore
                    </h1>
                    <h2 className="text-right text-xl text-green-700">
                        ...a portata di click!
                    </h2>
                </div>
            </div>
            <div className="hidden md:block bg-ananas h-full w-full bg-cover bg-center"></div>
            <div className="w-[350px] h-[350px] absolute inset-x-0 shadow-xl bg-white md:w-[200px] md:h-[200px] flex flex-col justify-center items-center mx-auto -mt-1 rounded-lg">
                <img src={MainLogo} alt="main logo" />
                <Link to="/shop">
                    <button className="relative bottom-8 p-1 bg-amber-500 text-white px-4 rounded-2xl cursor-pointer hover:bg-amber-600">
                        Entra
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
