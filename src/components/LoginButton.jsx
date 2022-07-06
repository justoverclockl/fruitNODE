import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import LoginModal from './LoginModal'

const LoginButton = () => {
    const [openLoginModal, setOpenLoginModal] = useState(false)

    const openLogin = () => {
        setOpenLoginModal(!openLoginModal)
    }
    return (
        <>
            <li>
                <button
                    onClick={openLogin}
                    className="bg-green-800 p-2 rounded-lg hover:bg-green-600"
                >
                    <PersonIcon />
                </button>
            </li>
            {openLoginModal && <LoginModal state={setOpenLoginModal} />}
        </>
    )
}

export default LoginButton
