import React, { useEffect } from 'react'

const SingleFruitPopup = ({ fruit, state }) => {
    useEffect(() => {
        state(true)
    }, [])

    const closePopup = () => {
        state(false)
    }

    return (
        <div className="h-screen w-screen fixed top-1/2 flex items-center left-1/2 transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-md z-30 hover:scale-110 duration-1000">
            <div className="flex flex-col justify-center items-center inset-x-0 shadow-xl bg-green-300 text-green-800 w-[500px] h-[600px] mx-auto -mt-1 rounded-xl">
                <h1 className="font-bold text-4xl mb-4">{fruit.name}</h1>
                <img
                    className="w-[200px] rounded-[100%] mb-4"
                    src={fruit.image}
                    alt={fruit.name}
                />
                <h2 className="text-xl mb-4">
                    Alcune informazioni su questo frutto:
                </h2>
                <p className="px-8">
                    Questo frutto fa parte della famiglia "{fruit.family}" e del
                    gene "{fruit.genus}".
                </p>
                <p className="px-8">
                    I principali valori nutrizionali sono: <b>Calorie: </b>
                    {fruit.nutritions.calories}, <b>Carboidrati: </b>{' '}
                    {fruit.nutritions.carbohydrates},<b>Grassi: </b>{' '}
                    {fruit.nutritions.fat}, <b>Proteine: </b>{' '}
                    {fruit.nutritions.protein} e<b> Zuccheri: </b>{' '}
                    {fruit.nutritions.sugar}.
                </p>
                <button
                    onClick={closePopup}
                    className="mt-9 bg-orange-600 text-white p-4 rounded-lg"
                >
                    Chiudi
                </button>
            </div>
        </div>
    )
}

export default SingleFruitPopup
