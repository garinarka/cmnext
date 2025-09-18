import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold mb-4">
        Selamat datang di MyApp 🚀
      </h1>
      <p className="text-gray-600 mb-6">
        Next.js + TailwindCSS + shadcn/ui sudah siap!
      </p>
      <Button>Get Started</Button>
    </div>
  );
}
