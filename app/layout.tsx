import './globals.css'
import GlobalNav from './(components)/global-nav'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="grid grid-cols-12 p-24">
                <aside className="col-span-2">
                    <GlobalNav />
                </aside>
                <main className="col-span-10">{children}</main>
            </body>
        </html>
    )
}
