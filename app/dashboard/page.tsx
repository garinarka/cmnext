import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="max-w-md mx-auto mt-20 space-y-4">
            <h1 className="text-2xl font-bold">
                Welcome, {session.user?.name || session.user?.email}
            </h1>
            <form action="/api/auth/signout" method="post">
                <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </form>
        </div>
    )
}
