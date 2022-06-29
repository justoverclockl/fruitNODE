import React from 'react'
import AvatarGeneric from '../assets/avatar-generic.png'

const NavbarProfile = ({ props }) => {
    return (
        <div className="bg-orange-400 p-2 ml-4 rounded-md flex items-center">
            <h2>Bentornato, {props[0].username}</h2>
            <img
                className="w-[30px] ml-2"
                src={AvatarGeneric}
                alt="default Avatar"
            />
        </div>
    )
}

export default NavbarProfile
