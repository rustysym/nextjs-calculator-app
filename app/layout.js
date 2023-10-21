import { League_Spartan } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const leaguespartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculator | Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark-blue">
      <body className={leaguespartan.className}><Providers>{children}</Providers></body>
    </html>
  )
}
