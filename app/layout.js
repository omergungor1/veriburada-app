import './globals.css'

export const metadata = {
  title: 'Veriburada App',
  description: 'Veriburada uygulaması',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}

