import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { editFruit } from '../states/editFruitSlice'

const EditFruitModal = ({ state, fruit }) => {
    const dispatch = useDispatch()
    const [formState, setFormState] = useState({})

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(
            editFruit({
                data: formState,
                id: fruit.id,
            })
        )
    }

    return (
        <>
            <div className="h-screen w-screen fixed top-1/2 flex items-center left-1/2 backdrop-blur-lg transform -translate-y-1/2 -translate-x-1/2 z-30">
                <div className="fixed z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-100 shadow-xl w-fit min-w-[500px] h-fit p-4 rounded-xl hover:scale-110 duration-1000">
                    <div
                        onClick={() => state(false)}
                        className="text-right text-black cursor-pointer"
                    >
                        <CloseIcon />
                    </div>
                    <h1 className="font-bold text-4xl mb-4 text-green-900 text-center">
                        Aggiungi Frutto
                    </h1>
                    <div className="w-[500px] h-fit p-4 rounded-lg flex justify-center items-center flex-col">
                        <form onSubmit={handleFormSubmit}>
                            <Box
                                sx={{
                                    '& .MuiTextField-root': {
                                        m: 1,
                                        width: '35ch',
                                    },
                                }}
                                autoComplete="off"
                            >
                                <div className="flex">
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                genus: e.target.value,
                                            })
                                        }}
                                        name="genus"
                                        label="Genus"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.genus}
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                name: e.target.value,
                                            })
                                        }}
                                        name="name"
                                        label="Nome"
                                        variant="filled"
                                        color="success"
                                        type="text"
                                        defaultValue={fruit.name}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div className="flex">
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                image: e.target.value,
                                            })
                                        }}
                                        name="image"
                                        label="Image"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.image}
                                        type="text"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div className="flex">
                                    <TextField
                                        name="price"
                                        label="Prezzo"
                                        variant="filled"
                                        color="success"
                                        type="number"
                                        defaultValue={fruit.price}
                                        style={{ width: '100%' }}
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                price: e.target.value,
                                            })
                                        }}
                                    />
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                family: e.target.value,
                                            })
                                        }}
                                        name="family"
                                        label="Famiglia"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.family}
                                        type="text"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div className="flex">
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                order: e.target.value,
                                            })
                                        }}
                                        name="order"
                                        label="Ordine"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.order}
                                        type="text"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div className="flex">
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                carbohydrates: e.target.value,
                                            })
                                        }}
                                        name="carbohydrates"
                                        label="Carboidrati"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.carbohydrates}
                                        type="number"
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                protein: e.target.value,
                                            })
                                        }}
                                        name="protein"
                                        label="Proteine"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.protein}
                                        type="number"
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                fat: e.target.value,
                                            })
                                        }}
                                        name="fat"
                                        label="Grassi"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.fat}
                                        type="number"
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                calories: e.target.value,
                                            })
                                        }}
                                        name="calories"
                                        label="calorie"
                                        variant="filled"
                                        color="success"
                                        type="number"
                                        defaultValue={fruit.calories}
                                        style={{ width: '100%' }}
                                    />
                                    <TextField
                                        onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                sugar: e.target.value,
                                            })
                                        }}
                                        name="sugar"
                                        label="Zuccheri"
                                        variant="filled"
                                        color="success"
                                        defaultValue={fruit.sugar}
                                        type="number"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </Box>
                            <div className="mt-4 flex mx-auto flex justify-center">
                                <button
                                    type="submit"
                                    className=" p-2 text-lg bg-orange-400 text-white rounded-md mr-2"
                                >
                                    Modifica Frutto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditFruitModal
