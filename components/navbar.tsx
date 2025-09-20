"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSession } from "next-auth/react"

export function Navbar() {
    const { data: session, status } = useSession()

    return (
        <nav className="w-full border-b bg-background shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold">
                    MyApp
                </Link>

                {/* Menu */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/about"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Contact
                    </Link>
                    <ThemeToggle />

                    {status === "loading" ? (
                        <Button disabled>Loading...</Button>
                    ) : session ? (
                        <Link href="/dashboard">
                            <Button>Dashboard</Button>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <Button>Login</Button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}
