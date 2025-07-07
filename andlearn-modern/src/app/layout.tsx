import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

// Configure fonts with Georgian support
const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "AndLearn - უფასო პროგრამირების სწავლება | Free Programming Education",
    template: "%s | AndLearn"
  },
  description: "უფასო, დამწყები-მეგობრული პროგრამირების ტუტორიალები ქართულ ენაზე. JavaScript, React, Python და TypeScript. | Free, beginner-friendly programming tutorials in Georgian. JavaScript, React, Python and TypeScript.",
  keywords: [
    "programming", "პროგრამირება", "javascript", "react", "python", "typescript",
    "tutorials", "ტუტორიალები", "georgian", "ქართული", "education", "განათლება",
    "coding", "კოდირება", "free", "უფასო", "beginner", "დამწყები"
  ],
  authors: [{ name: "AndLearn Team" }],
  creator: "AndLearn",
  publisher: "AndLearn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      'ka': '/ka',
      'en': '/en',
      'x-default': '/'
    }
  },
  openGraph: {
    type: "website",
    locale: "ka_GE",
    alternateLocale: ["en_US"],
    url: "https://andlearn.dev",
    siteName: "AndLearn",
    title: "AndLearn - უფასო პროგრამირების სწავლება",
    description: "უფასო, დამწყები-მეგობრული პროგრამირების ტუტორიალები ქართულ ენაზე. JavaScript, React, Python და TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AndLearn - Programming Education in Georgian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AndLearn - უფასო პროგრამირების სწავლება",
    description: "უფასო, დამწყები-მეგობრული პროგრამირების ტუტორიალები ქართულ ენაზე.",
    images: ["/twitter-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head>
        {/* Georgian font preload for better performance */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload coding fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased georgian-text min-h-screen`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">
                {children}
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
