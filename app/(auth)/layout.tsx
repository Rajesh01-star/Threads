import { Inter } from "next/font/google"
import "../globals.css";

import React from "react"
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
    titlle: 'Threads',
    description: 'A nextJS 13 Meta Threads Application with Typescript'
}

const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <div className="w-fit flex justify-center items-center min-h-screen">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}