import './globals.css'

import { Finger_Paint } from 'next/font/google'

const inter = Finger_Paint({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Vercel AI SDK - Next.js OpenAI Examples',
  description: 'Examples of using the Vercel AI SDK with Next.js and OpenAI.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
