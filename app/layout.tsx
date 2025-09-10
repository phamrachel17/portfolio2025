import type { Metadata } from 'next'
import { Open_Sans, Dancing_Script } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers/ThemeProvider'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rachel Pham - Portfolio',
  description: 'Software Engineer Portfolio - Goldman Sachs, NASA JPL, Northrop Grumman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${dancingScript.variable}`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
