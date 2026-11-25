import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishan Shirode | Entry-Level AI/ML Engineer | Python Backend & GenAI",
  description: "Entry-Level AI/ML Engineer | Python Backend & GenAI. B.E. 2026 graduate building Python backends, RAG pipelines and AI voice agents.",
  keywords: "Entry-Level AI/ML Engineer, Python Backend, GenAI, FastAPI, RAG, LangChain, FAISS, BM25, pytest, Portfolio",
  authors: [{ name: "Ishan Shirode" }],
  creator: "Ishan Shirode",
  openGraph: {
    title: "Ishan Shirode | Entry-Level AI/ML Engineer | Python Backend & GenAI",
    description: "Entry-Level AI/ML Engineer | Python Backend & GenAI. Building Python backends, RAG pipelines and AI voice agents.",
    url: "https://ishan-portfolio-two-psi.vercel.app",
    siteName: "Ishan Shirode Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ishan Shirode - Entry-Level AI/ML Engineer | Python Backend & GenAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Shirode | Entry-Level AI/ML Engineer | Python Backend & GenAI",
    description: "Entry-Level AI/ML Engineer | Python Backend & GenAI. Building Python backends, RAG pipelines and AI voice agents.",
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
              "jobTitle": "Entry-Level AI/ML Engineer | Python Backend & GenAI",
              "description": "Entry-Level AI/ML Engineer | Python Backend & GenAI building Python backends, RAG pipelines and AI voice agents.",
              "url": "https://ishan-portfolio-two-psi.vercel.app",
              "sameAs": [
                "https://github.com/ISHANSHIRODE01",
                "https://www.linkedin.com/in/ishan-shirode-556534375/"
              ],
              "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Python", "FastAPI", "RAG", "LangChain", "AI Voice Agents"]
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
