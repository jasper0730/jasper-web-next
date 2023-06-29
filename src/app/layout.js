import '@/styles/globals.sass'
import '@/styles/reset.sass'
import '@/styles/main.sass'
import { Inter } from 'next/font/google'
import { 
  Header,
  Footer,
} from '@/components/ui';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
