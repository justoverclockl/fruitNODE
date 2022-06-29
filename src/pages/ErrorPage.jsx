import React from 'react'
import { Link } from 'react-router-dom'
import Error404 from '../assets/404.png'

const ErrorPage = () => {
    return (
        <div className="bg-green-600 w-screen h-screen relative">
            <div className="absolute text-center top-1/2 left-1/2 transform text-white -translate-x-1/2 -translate-y-1/2">
                <img
                    className="max-w-[400px] w-full"
                    src={Error404}
                    alt="404 error"
                />
                <h1 className="font-bold text-6xl py-4">Oops...</h1>
                <h2 className="py-4">
                    Pagina non trovata! Ricordati che qui abbiamo solo frutta!
                </h2>
                <Link to="/">
                    <button className="bg-green-900 p-4 rounded-xl hover:bg-green-700">
                        Torna alla Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
