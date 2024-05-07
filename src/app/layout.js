import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expert adblocker- Best and free adblocker Chrome extension",
  description: "Expert Adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups but it also protects your browser from dangerous websites.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Expert adblocker- Best and free adblocker Chrome extension",
    description: "Expert Adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups but it also protects your browser from dangerous websites.",
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image src="/bg.png" className="fixed -z-10 top-0 left-0 w-full h-full" width={500} height={500} alt="background" />
        {children}
      </body>
    </html>
  );
}
