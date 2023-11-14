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
        <header className={'flex  items-center w-full h-25 p-3'}>
          <img className={'h-10'} src="http://clipart-library.com/images_k/coffee-png-transparent/coffee-png-transparent-25.png" alt="logo da empresa coffe house" />
          <h1 className='text-2xl w-full text-center text-orange-400'>Bem-vindo!</h1>
        </header>
        {children}
      </body>
    </html>
  )
}
