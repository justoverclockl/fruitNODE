import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'
import CloseIcon from '@mui/icons-material/Close'

const LoginModal = ({ state }) => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg">
            <div className=" flex flex-col w-screen h-screen justify-center items-center">
                <div className="relative bg-zinc-100 w-[500px] h-[500px] rounded-lg shadow-2xl flex justify-center items-center flex-col">
                    <div
                        onClick={() => state(false)}
                        className="absolute right-2 top-2 text-black cursor-pointer"
                    >
                        <CloseIcon />
                    </div>
                    <h1 className="font-bold text-4xl mb-8 text-green-900 ">
                        Login
                    </h1>
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
                                inputProps={{ pattern: '[a-z]' }}
                                id="email"
                                label="Email - Richiesto"
                                variant="filled"
                                color="success"
                                type="email"
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
                            />
                        </div>
                    </Box>

                    <div className="mt-4">
                        <button className="p-2 bg-orange-400 text-white text-2xl mt-4 rounded-md mr-2">
                            <LoginIcon /> Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
