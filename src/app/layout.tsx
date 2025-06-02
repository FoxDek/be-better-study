import './globals.css'
import Header from './components/Header';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Be better site',
  description: 'Tema`s study project on Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className='bg-[#FCF9FD] flex flex-col min-h-screen'>
        <Header />
        <main className="flex-grow container mx-auto pt-5 pb-10">{children}</main>
      </body>
    </html>
  )
}
