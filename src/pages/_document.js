import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import config from "@/lib/config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <Script
          defer
          type="application/javascript"
          src="https://tracker.clickguard.com/s/accTXeVmnd1SS/astFsQNUyycPP"
          strategy="worker"
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${config.gtm.gtmId}`}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
