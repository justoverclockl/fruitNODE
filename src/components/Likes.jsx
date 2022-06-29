import React, { useState } from 'react'
import Badge from '@mui/material/Badge'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

const Likes = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    return (
        <div className="flex items-center justify-around mb-2">
            <div className="flex items-center justify-center cursor-pointer">
                <Badge badgeContent={like} color="success">
                    <button
                        className="p-1 bg-green-400 text-white rounded-md"
                        onClick={() => setLike((v) => v + 1)}
                    >
                        <ThumbUpIcon />
                    </button>
                </Badge>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                <Badge badgeContent={dislike} color="success">
                    <button
                        className="p-1 bg-red-500 text-white rounded-md"
                        onClick={() => setDislike((v) => v + 1)}
                    >
                        <ThumbDownIcon />
                    </button>
                </Badge>
            </div>
        </div>
    )
}

export default Likes
