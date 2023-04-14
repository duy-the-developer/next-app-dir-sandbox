import Link from 'next/link'

const hooks = [
    {
        name: 'useState',
        path: '/react-hooks/use-state',
    },
    {
        name: 'useEffect',
        path: '/react-hooks/use-effect',
    },
    {
        name: 'useMemo',
        path: '/react-hooks/use-memo',
    },
    {
        name: 'useCallback',
        path: '/react-hooks/use-callback',
    },
    {
        name: 'useLayoutEffect',
        path: '/react-hooks/use-layout-effect',
    },
]

export default function ReactHooksPage() {
    return (
        <>
            <h1 className="text-6xl font-bold">React Hooks</h1>
            <ul className="flex gap-4 flex-col">
                {hooks.map((hook) => (
                    <li key={hook.name}>
                        <Link href={hook.path} className="hover:text-rose-400">
                            {hook.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
