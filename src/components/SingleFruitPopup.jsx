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
            <div className="flex flex-col justify-center items-center inset-x-0 shadow-xl bg-white text-green-800 w-[500px] h-[600px] mx-auto -mt-1 rounded-xl">
                <h1 className="font-bold text-4xl mb-4">{fruit.name}</h1>
                <img
                    className="w-[300px] rounded-[100%] mb-4"
                    src={fruit.image}
                    alt={fruit.name}
                />
                <h2 className="text-xl mb-4">
                    Alcune informazioni su questo frutto:
                </h2>
                <div className="max-w-[390px]">
                    <p className="px-8">
                        Questo frutto fa parte della famiglia "{fruit.family}" e
                        del gene "{fruit.genus}".
                    </p>
                    <p className="px-8 mt-2">
                        I principali valori nutrizionali sono:
                        <p>
                            <b>Calorie: </b>
                            {fruit.calories}, <b>Carboidrati: </b>{' '}
                            {fruit.carbohydrates},<b>Grassi: </b> {fruit.fat},{' '}
                            <b>Proteine: </b> {fruit.protein} e
                            <b> Zuccheri: </b> {fruit.sugar}.
                        </p>
                    </p>
                </div>
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
