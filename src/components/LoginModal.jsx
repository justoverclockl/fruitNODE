import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import { getSession, loginToStore, saveSession } from '../states/loginSlice'

const LoginModal = ({ state }) => {
    const [formData, setFormData] = useState({
        email: null,
        password: null,
    })

    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginToStore(formData))
        setTimeout(() => {
            dispatch(saveSession())
            dispatch(getSession())
            window.location.reload()
        }, 1000)
    }

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg">
            <div className=" flex flex-col w-screen h-screen justify-center items-center">
                <div className="relative bg-zinc-100 w-[450px] h-[400px] rounded-lg shadow-2xl flex justify-center items-center flex-col">
                    <div
                        onClick={() => state(false)}
                        className="absolute right-2 top-2 text-black cursor-pointer"
                    >
                        <CloseIcon />
                    </div>
                    <div>
                        <h1 className="font-bold text-4xl mb-8 text-green-900 ">
                            Login
                        </h1>
                    </div>
                    <div className="text-black mb-3 w-[35ch]">
                        <p>
                            Inserisci email e password per effettuare il login.
                            Tutti i campi sono obbligatori.
                        </p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <Box
                            sx={{
                                '& .MuiTextField-root': {
                                    m: 1,
                                    width: '35ch',
                                },
                            }}
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    inputProps={{
                                        pattern:
                                            '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
                                    }}
                                    id="email"
                                    label="Email - Richiesto"
                                    variant="filled"
                                    color="success"
                                    type="email"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="password"
                                    label="Password - Richiesto"
                                    variant="filled"
                                    color="success"
                                    type="password"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </Box>
                        <div className="mt-4 flex justify-center">
                            <button
                                type="submit"
                                className="p-2 bg-orange-400 text-white text-2xl mt-4 rounded-md mr-2"
                            >
                                <LoginIcon /> Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
