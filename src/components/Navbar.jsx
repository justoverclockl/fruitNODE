import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge'
import LogoNavBar from '../assets/logonavbar.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import RegisterLoginButtons from './RegisterLoginButtons'
import NavbarProfile from './NavbarProfile'
import { cartTotalItems } from '../states/cartSlice'
import LoginButton from './LoginButton'
import { authData, getSession } from '../states/loginSlice'

const Navbar = () => {
    const totalItemsInCart = useSelector(cartTotalItems)
    const [openCart, setOpenCart] = useState(false)

    const dispatch = useDispatch()
    const authSession = useSelector(authData)
    console.log(authSession)

    const changePopupState = () => {
        setOpenCart(!openCart)
    }

    useEffect(() => {
        dispatch(getSession())
    }, [dispatch])

    return (
        <div className="flex fixed top-0 w-screen z-20 justify-between items-center px-8 py-8 bg-green-500 text-white">
            <div className="hidden md:flex flex-row items-center">
                <Link to="/">
                    <img
                        className="w-[50px]"
                        src={LogoNavBar}
                        alt="logo navbar"
                    />
                </Link>
                <h1 className="px-4 font-bold text-lg text-white">
                    Fruit Store Ecommerce
                </h1>
            </div>
            <div>
                <ul className="flex flex-wrap flex-row items-center">
                    <li>
                        <Badge
                            className="cursor-pointer"
                            badgeContent={totalItemsInCart}
                            color="success"
                        >
                            <div className="mr-4">
                                {totalItemsInCart <= 0
                                    ? 'Il tuo carrello è vuoto'
                                    : totalItemsInCart === 1
                                    ? `Il tuo carrello contiene ${totalItemsInCart} prodotto`
                                    : totalItemsInCart > 1
                                    ? `Il tuo carrello contiene ${totalItemsInCart} prodotti`
                                    : null}
                            </div>
                            <ShoppingCartIcon onClick={changePopupState} />
                            {openCart && <Cart setPopup={setOpenCart} />}
                        </Badge>
                    </li>

                    <RegisterLoginButtons />
                    {!authSession && <LoginButton />}
                    {authSession && (
                        <NavbarProfile props={authSession?.email} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
