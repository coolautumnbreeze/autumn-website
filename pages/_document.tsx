import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { siteDescription, siteTitle } from "data/app";

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="h-full bg-autumn-white">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="assets/favicon.png"
          />
          <meta
            name="description"
            content="Prevent burnout and improve your well-being with Autumn."
          />
          {/* <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_AUTH0_NAMESPACE}/images/thumbnail.png`}
          /> */}
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
