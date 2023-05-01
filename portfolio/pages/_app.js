import '@/styles/global.scss'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return (
    <div>
      <div id="ScrollContainer" className='test'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
