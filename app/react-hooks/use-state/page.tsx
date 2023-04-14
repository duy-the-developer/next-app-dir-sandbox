import React from 'react'
import Example1 from './example1'

const Example1Section = () => (
    <>
        <h2 className="text-4xl">Example 1: Why React Re-Renders</h2>
        <p className="text-xl text-rose-400">
            TLDR: React only re-renders when there's a state change
        </p>
        <Example1 />
        <h3 className="text-2xl">Code + Explanation</h3>
        <p className="text-xl"></p>
        <pre className="border border-slate-500 rounded-md p-4">
            {`import React, { useState } from 'react'
import Icon from './icon'

const CountDisplay = ({ count }: { count: number }) => {
    console.count('CountDisplay rendered')
    return <span>{count}</span>
}

// Counter component
const Counter = () => {
    const [count, setCount] = useState(0)
    console.count('Counter rendered')

    return (
        <div className="flex items-center justify-center gap-4">
            <button onClick={() => setCount(count + 1)}>+ 1</button>
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
                <h1>Example 1: How React Re-renders</h1>
                <button onClick={handleClick}>Show counter</button>
                {showCounter && <Counter />}
            </div>
        </>
    )
}

export default Example1
`}
        </pre>
    </>
)

const UseStatePage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-6xl font-bold">useState Hook</h1>
            <p className="text-xl text-rose-400">
                TLDR: Because React function component is re-invoked with every
                re-render,{' '}
                <span className="rounded-md bg-rose-400 text-black px-2 font-mono">
                    useState
                </span>{' '}
                is used to keep track of persistent values through render
                cycles.
            </p>
            <Example1Section />
        </div>
    )
}

export default UseStatePage
