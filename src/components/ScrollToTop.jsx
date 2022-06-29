import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const ScrollToTop = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="hidden lg:block fixed right-24 bottom-20">
            <button
                onClick={handleScroll}
                className="bg-orange-600 p-4 text-white rounded-[100%]"
            >
                <ArrowUpwardIcon />
            </button>
        </div>
    )
}

export default ScrollToTop
