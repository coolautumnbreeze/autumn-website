import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PageHead } from "components/PageHead";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <Navbar />
      <div className="pt-[109px]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
