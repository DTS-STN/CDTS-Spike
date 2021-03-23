import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* CDTS implementation */}
          <script
            type="text/javascript"
            src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/soyutils.js"
          ></script>
          <script
            type="text/javascript"
            src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/wet-en.js"
          ></script>
          <script type="text/javascript">
            document.write(wet.builder.refTop( process.env.cdnEnv,
            process.env.subTheme, process.env.jqueryEnv, process.env.localPath,
            process.env.isApplication ))
          </script>
        </Head>
        <body>
          <div id="def-top"></div>
          <Main />
          <NextScript />
          <div id="def-preFooter"></div>
        </body>
        <div id="def-footer"></div>
      </Html>
    );
  }
}
