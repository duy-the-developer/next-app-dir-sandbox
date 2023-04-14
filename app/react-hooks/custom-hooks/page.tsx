'use client'
import React, { useState } from 'react'
import useGetMovieByTitle from './useGetMovieByTitle'

const CustomHooksPage = () => {
    const [input, setInput] = useState('')

    const movieData = useGetMovieByTitle(input)
    const movieData = useGetMovieByTitle(input)

    return (
        <div>
            <label>
                <span>Movie Title</span>
                <input type="text"></input>
            </label>
        </div>
    )
}

export default CustomHooksPage
