import { Epilogue } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Schema from "./Schema";
import Script from "next/script";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Expert adblocker- Best and free adblocker Chrome extension",
  description: "Expert Adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups but it also protects your browser from dangerous websites.",
  icons: {
    icon: '/favicon.png',
  },
  keywords: "Expert adblocker chrome extension, Hulu adblock, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, Spotify adblocker, twitch adblock extension, ad free hulu, ad blocker free, twitch ad blocker, adblock for twitch, Youtube Adblocker, hulu without ads, why does hulu have ads, hulu commercial free",
  openGraph: {
    title: "Expert adblocker- Best and free adblocker Chrome extension",
    description: "Expert Adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups but it also protects your browser from dangerous websites.",
    type: 'website',
    siteName: "Expert adblocker",
    url: 'https://expertadblocker.com/',
    images: "/favicon.png",
  },
  metadataBase: new URL("https://expertadblocker.com/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <head>
        <meta name="google-site-verification" content="Ns38yDUiSF5RmKWMUj4CdjFgdOKSgSHMTUwQ6osp-BQ" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-WYB7DP3G18%22%3E" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WYB7DP3G18');
            `,
          }}
        />
      </head>
      <body className={epilogue.className}>
        <Schema />
        <Image src="/bg.png" className="fixed -z-10 top-0 left-0 w-full h-full" width={500} height={500} alt="background" />
        {children}
      </body>
    </html>
  );
}
