import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CartDrawer, CartProvider } from "./cart";
import { Footer, Header } from "./components";
import "./globals.css";

const interDisplay = Inter({
  variable: "--font-display",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const interUi = Inter({
  variable: "--font-ui",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const siteTitle = "wonder me box — магазин подарочных наборов";
const siteDescription =
  "Многостраничный магазин подарочных наборов wonder me box: каталог готовых боксов, корзина без онлайн-оплаты, корпоративные заказы, доставка и контакты.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wmgift.ru"),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/og.webp",
        width: 900,
        height: 1200,
        alt: "Реальный подарочный набор wonder me box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf7ed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${interDisplay.variable} ${interUi.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
