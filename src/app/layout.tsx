import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AJ e-commerce',
  description: 'E-commerce de sorvetes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={'flex justify-center '}>
          <img className={'h-20'} src="https://o.remove.bg/downloads/523d9324-c926-49b1-b567-5dc8ebf7d658/image-removebg-preview.png" alt="logo da empresa" />
        </header>
        {children}
      </body>
    </html>
  )
}
