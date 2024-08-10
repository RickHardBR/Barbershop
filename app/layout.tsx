import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Nunito } from "next/font/google"
import { Toaster } from "sonner"
import Footer from "./_components/footer"

const nunito = Nunito({
  weight: ["400", "700"], // Adapte conforme necessário
  subsets: ["latin"],
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ouros - BarberShop",
  description: "Cuidando bem de você",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={`${inter.className} ${nunito.className}`}>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
