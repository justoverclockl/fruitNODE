import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { v4 as randomId } from 'uuid'
import { useDispatch } from 'react-redux'
import { register } from '../states/registerSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            register({
                id: randomId(),
                username: username,
                email: email,
                password: password,
                isLoggedIn: true,
            })
        )
        navigate('../shop', { replace: true })
    }

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1 className="font-bold text-4xl mb-4 text-green-900">
                Registrati a Fruit-Shop
            </h1>
            <div className="bg-zinc-100 w-[500px] h-[500px] rounded-lg shadow-2xl flex justify-center items-center flex-col">
                <Box
                    component="form"
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
                            inputProps={{ pattern: '[a-z]' }}
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
                <div>
                    <p className="w-[300px] mb-4 mt-4 text-[14px]">
                        L'invio dei dati serve a Fruit-Store solo ed
                        esclusivamente per l'utilizzo della piattaforma stessa,
                        è sottinteso che ruberemo tutti i tuoi dati.
                    </p>
                </div>
                <div className="mt-4">
                    <button
                        onClick={handleSubmit}
                        className="p-2 bg-orange-400 text-white rounded-md mr-2"
                    >
                        Registrati
                    </button>
                    <button className="p-2 bg-orange-400 text-white rounded-md mr-2">
                        Pulisci
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
