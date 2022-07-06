import React from 'react'
import { Link } from 'react-router-dom'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

const RegisterLoginButtons = () => {
    return (
        <>
            <li>
                <Link to="/register">
                    <button className="bg-orange-400 p-2 rounded-lg hover:bg-orange-600">
                        <AppRegistrationIcon className="mr-2" />
                        Registrati
                    </button>
                </Link>
            </li>
        </>
    )
}

export default RegisterLoginButtons
