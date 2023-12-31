import { Inter } from 'next/font/google'

import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { ReduxProviders } from '@/stateManagement/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Research-toolkit',
  description: 'An AI ChatBOT for research',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          {children}
        </ReduxProviders>
      </body>
    </html>
  )
}
