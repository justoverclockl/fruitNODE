import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { deleteFruit } from '../states/deleteFruitSlice'
import toast, { Toaster } from 'react-hot-toast'

const DeleteFruitModal = ({ state, fruit }) => {

    const { id } = fruit
    const dispatch = useDispatch()

    const deletedFruit = () => {
        toast.error('Frutto rimosso dal database', {
            style: {
                borderRadius: '10px',
                background: '#c30000',
                color: '#fff',
            },
        })
    }

    const handleDeleteFruit = () => {
        dispatch(deleteFruit(id))
        deletedFruit()
        state(false)
    }

    return (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg'>
            <div className=' flex flex-col w-screen h-screen justify-center items-center'>
                <div
                    className='relative bg-zinc-100 w-[500px] h-fit p-8 text-center rounded-lg shadow-2xl flex justify-center items-center flex-col'>
                    <div
                        onClick={() => state(false)}
                        className='absolute right-2 top-2 text-black cursor-pointer'
                    >
                        <CloseIcon />
                    </div>
                    <h1 className='font-bold text-4xl mb-8 text-green-900 '>
                        Cancellare Frutto dal database?
                    </h1>
                    <p>
                        Attenzione! L'eliminazione è irreversibile, non sarà
                        possibile ripristinare il prodotto successivamente.
                    </p>
                    <div className='mt-4'>
                        <button
                            onClick={() => handleDeleteFruit()}
                            className='p-2 bg-green-500 text-white text-lg mt-4 rounded-md mr-2'>
                            CONFERMA
                        </button>
                        <button
                            onClick={() => state(false)}
                            className='p-2 bg-red-500 text-white text-lg mt-4 rounded-md mr-2'>
                            ANNULLA
                        </button>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    )
}

export default DeleteFruitModal
