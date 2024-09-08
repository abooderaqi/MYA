import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import "@/app/_styles/globals.css"
import Navbar from "../_components/Navbar"
import QueryProvider from "@/lib/providers/queryProvider"
import ToasterProvider from "@/lib/providers/ToasterProvider"
import Footer from "../_components/Footer"
import CustomNavBar from "../_components/CustomNavBar"

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] })

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
        <body className={roboto.className} suppressHydrationWarning={true}>
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
