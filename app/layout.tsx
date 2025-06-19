import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://next-visual-novel.vercel.app'),
  title: 'MortiSabbat || Visual Novel',
  description: 'Created by Dennis290699',
  generator: 'Morti Sabbat',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'MortiSabbat || Visual Novel',
    description: 'Created by Dennis290699',
    url: 'https://next-visual-novel.vercel.app/',
    siteName: 'MortiSabbat',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/d82480c1-17ff-434f-9ec7-7f57d8e89708.png?token=pi0gu7VIN8Xh669pgRRmPNYwo7Z_Nys8VzzSQO3JPDc&height=691&width=1200&expires=33286307737',
        width: 1200,
        height: 691,
        alt: 'MortiSabbat Cover',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MortiSabbat || Visual Novel',
    description: 'Created by Dennis290699',
    images: [
      'https://opengraph.b-cdn.net/production/images/d82480c1-17ff-434f-9ec7-7f57d8e89708.png?token=pi0gu7VIN8Xh669pgRRmPNYwo7Z_Nys8VzzSQO3JPDc&height=691&width=1200&expires=33286307737',
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
