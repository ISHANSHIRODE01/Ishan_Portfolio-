import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishan Shirode - AI/ML Engineer Portfolio",
  description: "AI & Machine Learning Engineer specializing in Generative AI, NLP, and LLMs. Building intelligent systems that understand, reason, and create.",
  keywords: "AI, Machine Learning, NLP, Generative AI, LLMs, Portfolio, Ishan Shirode, Computer Vision, Deep Learning",
  authors: [{ name: "Ishan Shirode" }],
  creator: "Ishan Shirode",
  openGraph: {
    title: "Ishan Shirode - AI/ML Engineer",
    description: "Building intelligent systems that understand, reason, and create",
    url: "https://ishanshirode.dev",
    siteName: "Ishan Shirode Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ishan Shirode - AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Shirode - AI/ML Engineer",
    description: "Building intelligent systems that understand, reason, and create",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ishan Shirode",
              "jobTitle": "AI & Machine Learning Engineer",
              "description": "AI & Machine Learning Engineer specializing in Generative AI, NLP, and LLMs",
              "url": "https://ishanshirode.dev",
              "sameAs": [
                "https://github.com/ISHANSHIRODE01",
                "https://www.linkedin.com/in/ishan-shirode-556534375/"
              ],
              "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision", "Deep Learning"]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
