import React, { useState } from 'react'
import LoadingIndicator from './LoadingIndicator'
import { useEffect } from 'react'
import TextField from '@mui/material/TextField'
import SingleFruitPopup from './SingleFruitPopup'
import Social from './Social'
import ScrollToTop from './ScrollToTop'
import { v4 as randomId } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'
import {
    getProducts,
    selectAllProducts,
    loadingState,
    errorState,
    productStatus,
} from '../states/storeSlice'
import { insertInCart } from '../states/cartSlice'
import Likes from './Likes'

const Products = () => {
    const [popup, setPopup] = useState(false)
    const [popupData, setPopupData] = useState(null)
    const [search, setSearch] = useState('')
    const togglePopup = () => setPopup(!popup)
    const cartSuccess = () => {
        toast.success('Prodotto Aggiunto al carrello!', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
    }

    // sezione redux
    const allFruits = useSelector(selectAllProducts)
    const isLoading = useSelector(loadingState)
    const fruitStatus = useSelector(productStatus)
    const error = useSelector(errorState)
    const dispatch = useDispatch()

    useEffect(() => {
        if (fruitStatus !== 'succeeded') {
            dispatch(getProducts())
        }
    }, [fruitStatus, dispatch])

    return (
        <div className="max-w-[1100px] mt-[8rem] mx-auto py-8 w-full my-20 min-h-[750px]">
            <Toaster position="bottom-right" reverseOrder={false} />
            <div
                id="search"
                className="mb-16 mx-auto w-[90%] flex justify-center items-center"
            >
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(event) => setSearch(event.target.value)}
                    id="filled-basic"
                    label="Cerca il tuo frutto"
                    color="success"
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className="relative grid mx-auto gap-y-12 justify-center items-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {error !== '' ? (
                    <h1 className="font-bold text-xl">{error}</h1>
                ) : null}

                {!error && isLoading && <LoadingIndicator />}
                {allFruits.fruits
                    .filter((fruit) => {
                        if (search === '') {
                            return fruit
                        } else if (
                            fruit.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return fruit
                        }
                    })
                    .map((fruit) => (
                        <div
                            key={fruit.name}
                            className="relative max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg text-center"
                        >
                            <div className="px-4 py-2">
                                <h1 className="text-3xl mt-4 font-bold text-gray-800 uppercase">
                                    {fruit.name}
                                </h1>
                                <div className="flex mt-4 flex-wrap items-center text-sm justify-center">
                                    <div className="bg-zinc-200 text-black p-[.2rem] rounded-md mr-2 mb-2">
                                        Carboidrati:{' '}
                                        {fruit.nutritions.carbohydrates}
                                    </div>
                                    <div className="bg-zinc-200 text-black p-[.2rem] rounded-md mr-2 mb-2">
                                        Proteine: {fruit.nutritions.protein}
                                    </div>
                                    <div className="bg-zinc-200 text-black p-[.2rem] rounded-md mr-2 mb-2">
                                        Grassi: {fruit.nutritions.fat}%
                                    </div>
                                </div>
                            </div>

                            <img
                                className="object-cover w-full h-48 mt-2 mb-6 hover:scale-110 duration-500 overflow-hidden"
                                src={fruit.image}
                                alt={fruit.name}
                            />
                            <div>
                                <Likes />
                            </div>
                            <div className="flex items-center justify-between px-4 py-2 bg-green-700 py-3">
                                <h1 className="text-lg font-bold text-white">
                                    {fruit.price}€
                                </h1>
                                <div className="flex">
                                    <button
                                        onClick={() => [
                                            cartSuccess(),
                                            dispatch(
                                                insertInCart({
                                                    ...fruit,
                                                    buyId: randomId(),
                                                    quantity: 1,
                                                })
                                            ),
                                        ]}
                                        className="mr-2 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-green-500 rounded hover:bg-green-300 focus:bg-green-200 focus:outline-none"
                                    >
                                        Acquista
                                    </button>
                                    <button
                                        onClick={() => {
                                            setPopupData(fruit)
                                            togglePopup()
                                        }}
                                        className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-orange-600 rounded hover:bg-orange-400 focus:bg-orange-600 focus:outline-none"
                                    >
                                        Dettagli
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                {popup && (
                    <SingleFruitPopup state={setPopup} fruit={popupData} />
                )}
            </div>
            <ScrollToTop />
            <Social />
        </div>
    )
}

export default Products
