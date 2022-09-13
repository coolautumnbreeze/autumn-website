import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { siteDescription, siteTitle } from "data/app";

export const PageHead = () => {
  const router = useRouter();

  const [ogUrl, setOgUrl] = useState("");
  const [ogImage, setOgImage] = useState("/assets/images/og-image.png");

  let titleText = siteTitle;

  switch (router.pathname) {
    case "/":
      titleText = siteDescription;
      break;
    case "/privacy":
      titleText = "Privacy Policy";
      break;
    default:
      break;
  }

  const browserTitle = `${siteTitle} | ${titleText}`;

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);

  return (
    <Head>
      <title>{browserTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="icon" href="/favicon.svg" />

      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={browserTitle} />
      <meta name="twitter:card" content="summary" />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Autumn Logo" />

      <script src="assets/js/main.js" async></script>
    </Head>
  );
};
