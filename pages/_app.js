import '../styles/global.scss'


export default function App({ Component, pageProps }) {
  console.log('App')
  return (
    <div>
      <div id="ScrollContainer" className='test'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
