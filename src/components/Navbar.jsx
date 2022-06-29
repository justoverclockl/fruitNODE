import React, { useState } from 'react'
import Badge from '@mui/material/Badge'
import LogoNavBar from '../assets/logonavbar.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import RegisterLoginButtons from './RegisterLoginButtons'
import { selectUser } from '../states/registerSlice'
import NavbarProfile from './NavbarProfile'
import { cartTotalItems } from '../states/cartSlice'

const Navbar = () => {
    const user = useSelector(selectUser)
    const totalItemsInCart = useSelector(cartTotalItems)
    const isEmpty = Object.keys(user).length === 0
    const [openCart, setOpenCart] = useState(false)

    const changePopupState = () => {
        setOpenCart(!openCart)
    }

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
                    {isEmpty ? (
                        <RegisterLoginButtons />
                    ) : (
                        <NavbarProfile props={user} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
