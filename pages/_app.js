import { useEffect } from 'react';
import Head from "next/head";
import AOS from "aos";

import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

import '../styles/globals.scss'

import '/styles/header.scss'
import '/styles/outer.scss'
import '/styles/gooery.scss'
import '/styles/works.scss'
import '/styles/side-element.scss'
import '/styles/myself.scss'
import '/styles/graphics.scss'
import '/styles/projects.scss'
import '/styles/maps.scss'
import '/styles/views-title.scss'
import '/styles/hover-image.scss'
import '/styles/window-screen.scss'
import '/styles/reviews.scss'
import '/styles/top-scrolled-bar.scss'
import '/styles/contact.scss'
import '/styles/cursor.scss'
import '/styles/afzalimdad.scss'
import '/styles/pre-loader.scss'
import '/styles/certifications.scss'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
    import("aos/dist/aos.js");
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <title>Mark Elmore | Backend Engineer &amp; LLM Systems Builder</title>
        <meta
          name="description"
          content="Backend engineer with 8+ years of experience designing robust, well-tested systems in Python, Go, and Django, focused on LLM-powered applications and high-volume billing platforms."
        />
        <meta
          name="keywords"
          content="Backend Engineer, Python, Go, Django, LLM, AI, microservices, APIs, billing systems"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mark Elmore | Backend Engineer &amp; LLM Systems Builder"
        />
        <meta
          property="og:description"
          content="Backend engineer with 8+ years of experience designing robust, well-tested systems in Python, Go, and Django, focused on LLM-powered applications and high-volume billing platforms."
        />
        <meta
          property="og:url"
          content="https://animated-portfolio-five-omega.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://animated-portfolio-five-omega.vercel.app/assets/profile.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mark Elmore | Backend Engineer &amp; LLM Systems Builder"
        />
        <meta
          name="twitter:description"
          content="Backend engineer with 8+ years of experience designing robust, well-tested systems in Python, Go, and Django, focused on LLM-powered applications and high-volume billing platforms."
        />
        <meta
          name="twitter:image"
          content="https://animated-portfolio-five-omega.vercel.app/assets/profile.jpg"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="shortcut icon"
          href="/assets/profile.jpg"
        />
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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
