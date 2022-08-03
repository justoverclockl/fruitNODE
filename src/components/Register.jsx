import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUserToDatabase, registerError } from '../states/registerSlice'
import { registerSuccess } from '../states/registerSlice'
import toast, { Toaster } from 'react-hot-toast'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const successMessage = useSelector(registerSuccess)
    const errorMessage = useSelector(registerError)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitUserData = {
        username: username,
        email: email,
        password: password,
    }

    const registerSuccessToast = () => {
        toast.success('Registrazione effettuata con successo!', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUserToDatabase(submitUserData))
        registerSuccessToast()
        setTimeout(() => {
            navigate('../shop', { replace: true })
        }, 4000)
    }

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1 className="font-bold text-4xl mb-4 text-green-900">
                Registrati a Fruit-Shop
            </h1>
            <div className="bg-zinc-100 w-[500px] h-[500px] rounded-lg shadow-2xl flex justify-center items-center flex-col">
                <form onSubmit={handleSubmit}>
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
                                id="username"
                                label="Nome Utente - Richiesto"
                                variant="filled"
                                color="success"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </Box>
                    <div className="w-[40ch] flex justify-center mx-auto mb-4 mt-4 text-[14px]">
                        L'invio dei dati serve a Fruit-Store solo ed
                        esclusivamente per l'utilizzo della piattaforma stessa,
                        è sottinteso che ruberemo tutti i tuoi dati.
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="submit"
                            className="p-3 uppercase font-bold bg-orange-400 hover:bg-orange-600 mt-4 text-white rounded-md mr-2"
                        >
                            Registrati
                        </button>
                    </div>
                    {successMessage !== '' && errorMessage !== '' && (
                        <div className="mt-4 flex text-green-600 justify-center">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage !== '' && (
                        <div className="mt-4 flex text-red-600 justify-center">
                            {errorMessage}
                        </div>
                    )}
                </form>
            </div>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    )
}

export default Register
