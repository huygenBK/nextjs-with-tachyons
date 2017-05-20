import NextDocument, { Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render () {
    return (
      <html>
        <Head />
        <body className='sans-serif'>
          <Main />
          <NextScript />

          <style jsx>{`
            @import 'tachyons/src/tachyons';

            :global(:root) { }
          `}</style>
        </body>
      </html>
    )
  }
}
