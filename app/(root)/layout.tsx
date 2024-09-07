import type { Metadata } from "next"
import { Lato } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import "@/app/_styles/globals.css"
import Navbar from "../_components/Navbar"
import QueryProvider from "@/lib/providers/queryProvider"
import ToasterProvider from "@/lib/providers/ToasterProvider"
import Footer from "../_components/Footer"

const inter = Lato({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Welcome / MYA Boutique",
  description: "MYA Boutique",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ClerkProvider afterSignOutUrl="/sign-in">
        <body className={inter.className} suppressHydrationWarning={true}>
          <QueryProvider>
            <ToasterProvider />
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
