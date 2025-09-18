import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
    return (
        <nav className="w-full border-b bg-background shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold">
                    MyApp
                </Link>

                {/* Menu */}
                <div className="flex items-center gap-4">
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                        Contact
                    </Link>
                    <ThemeToggle />
                    <Button>Login</Button>
                </div>
            </div>
        </nav>
    );
}
