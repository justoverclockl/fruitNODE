import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { logout } from '../states/loginSlice'
import { useDispatch } from 'react-redux'

const LogoutButton = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        window.location.reload()
    }

    return (
        <>
            <li>
                <button
                    onClick={() => handleLogout()}
                    className="bg-red-500 p-2 rounded-lg hover:bg-red-600"
                >
                    <LogoutIcon /> Logout
                </button>
            </li>
        </>
    )
}

export default LogoutButton
