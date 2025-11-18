import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/assets/profile.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/assets/profile.jpg"
          rel="icon"
          type="image/jpeg"
          sizes="16x16"
        />
        <link
          href="/assets/profile.jpg"
          rel="icon"
          type="image/jpeg"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/assets/profile.jpg"></link>
        <link rel="apple-touch-icon" href="/assets/profile.jpg"></link>

        <meta name="theme-color" content="#ffd369" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
