import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>

      <body className='bg-black text-white' style={{backgroundImage : "url('/assets/image/blurr-hero.svg')", backgroundPosition : 'top right', backgroundRepeat : 'no-repeat', backgroundSize : '40em', overflowX : 'hidden'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
