"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-sm rounded-lg border p-6 shadow-sm">
                <h1 className="mb-4 text-2xl font-semibold text-center">Login</h1>

                <p className="mb-6 text-sm text-muted-foreground text-center">
                    Silakan login dengan akun Google untuk melanjutkan ke dashboard
                </p>

                <Button
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="w-full"
                >
                    Login dengan Google
                </Button>
            </div>
        </div>
    )
}
