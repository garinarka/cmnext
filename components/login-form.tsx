"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useState } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCredentialsLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // jangan langsung redirect
    })

    setLoading(false)

    if (res?.error) {
      setError("Invalid email or password")
    } else {
      window.location.href = "/" // redirect manual
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Google account or credentials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCredentialsLogin}>
            <div className="grid gap-6">
              {/* Google login */}
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                Login with Google
              </Button>

              {/* separator */}
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>

              {/* credentials form */}
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
