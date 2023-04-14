'use client'
import React, { useState } from 'react'
import Icon from './icon'

const CountDisplay = ({ count }: { count: number }) => {
    console.count('CountDisplay rendered')
    return <span className="p-6 rounded-md w-10">{count}</span>
}

// Counter component
const Counter = () => {
    const [count, setCount] = useState(0)
    console.count('Counter rendered')

    return (
        <div className="flex items-center justify-center gap-4">
            <button
                onClick={() => setCount(count + 1)}
                className="border border-rose-400 p-4 rounded-md"
            >
                + 1
            </button>
            <CountDisplay count={count} />
            <Icon />
        </div>
    )
}

const Example1 = () => {
    const [showCounter, setShowCounter] = useState(false)
    console.count('Example1 rendered')

    const handleClick = () => setShowCounter(!showCounter)

    return (
        <>
            <div className="flex flex-col gap-4">
                <button
                    onClick={handleClick}
                    className="p-4 bg-rose-400 rounded-md"
                >
                    Show counter
                </button>
                {showCounter && <Counter />}
            </div>
        </>
    )
}

export default Example1
