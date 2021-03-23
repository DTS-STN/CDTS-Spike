import Document, { Html, Head, Main, NextScript } from "next/document";

const cdnEnv = "prod";
const subTheme = "gcweb";
const jqueryEnv = "external";
const localPath = "";
const isApplication = true;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* CDTS implementation */}
          <script
            type="text/javascript"
            src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/soyutils.js"
          ></script>
          <script
            type="text/javascript"
            src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/wet-en.js"
          ></script>
          <script>
            document.write(wet.builder.refTop(
            {(cdnEnv, subTheme, jqueryEnv, localPath, isApplication)}
            ))
          </script>
        </body>
      </Html>
    );
  }
}
