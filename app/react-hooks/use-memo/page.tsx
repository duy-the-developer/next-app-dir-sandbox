import React from 'react'
import Example1 from './example1'

const UseMemoPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-6xl font-bold">useMemo Hook</h1>
            <h2 className="text-4xl">Example 1: Why React Re-Renders</h2>
            <p className="text-xl text-rose-400">TLDR:</p>
            <Example1 />
            <pre className="border border-slate-500 rounded-md p-4">
                {`
'use client'
import React, { useEffect, useRef, useState } from 'react'

const Box = () => {
    const [boxIsRed, setBoxIsRed] = useState(false)
    const boxRenderCount = useRef(0)
    console.log(\`Box rendered: \${boxIsRed ? 'red' : 'blue'}}\`)

    useEffect(() => {
        boxRenderCount.current += 1
    })

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setBoxIsRed(!boxIsRed)}
                className="p-4 bg-rose-400 rounded-md"
            >
                Change memoized-box color
            </button>
            <div
                className="w-20 h-20 rounded-md"
                style={{
                    backgroundColor: boxIsRed ? 'red' : 'blue',
                }}
            ></div>
            <div className="p-2 text-center">
                Box Render Count: {boxRenderCount.current}
            </div>
        </div>
    )
}

const MemoedBox = React.memo(Box)

const Example1 = () => {
    const [appRenderCount, setAppRenderCount] = useState(0)
    console.log(\`App rendered \${appRenderCount} times\`)

    return (
        <div className="p-4 border border-rose-400 rounded-md space-y-10">
            <div className="flex justify-start items-baseline gap-4">
                <button
                    onClick={() => setAppRenderCount(appRenderCount + 1)}
                    className="p-4 bg-rose-400 rounded-md"
                >
                    Re-render Example 1
                </button>
                <div className="p-4">
                    Example 1 Render Count: {appRenderCount}
                </div>
            </div>
            <div className="flex justify-start gap-4 border border-rose-400 p-4 rounded-md">
                <Box />
                <MemoedBox />
            </div>
        </div>
    )
}

export default Example1

`}
            </pre>
        </div>
    )
}

export default UseMemoPage
