'use client'
import { useState } from 'react'

export default function useGetMovieByTitle(title: string) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=4a3b711b&t=${title}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })
    }, [title])

    return data
}
