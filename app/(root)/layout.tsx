import {ClerkProvider} from '@clerk/nextjs';
import {Inter} from 'next/font/google'

import '../globals.css'
export const metadata = {
    title: 'Threads',
    description: 'A Nex.js 13 Meta Threads Application'
}
const inter = Inter({subsets: ['latin']})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ClerkProvider>
    )
  }

 
