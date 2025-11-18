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
        <meta
          name="description"
          content="Backend engineer with 8+ years of experience designing robust, well-tested systems in Python, Go, and Django, focused on LLM-powered applications and high-volume billing platforms."
        />
        <meta
          property="og:title"
          content="Mark Elmore | Backend Engineer & LLM Systems Builder"
        />
        <meta
          property="og:description"
          content="Backend engineer with 8+ years of experience designing robust, well-tested systems in Python, Go, and Django, focused on LLM-powered applications and high-volume billing platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mark Elmore | Backend Engineer & LLM Systems Builder"
        />
        <meta
          name="twitter:description"
          content="Backend engineer with 8+ years of experience designing robust, well-tested systems in Python, Go, and Django, focused on LLM-powered applications and high-volume billing platforms."
        />
        <meta name="twitter:image" content="/assets/profile.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
