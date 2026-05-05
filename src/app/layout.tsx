import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Trindade | Desenvolvimento de Sites & Apps",
  description: "Crie seu site e app com Gabriel Trindade. Soluções modernas e profissionais para empresas e negócios locais.",
  keywords: ["desenvolvimento de sites", "criação de aplicativos", "desenvolvedor freelancer", "sites para empresas", "Gabriel Trindade"],
  authors: [{ name: "Gabriel Trindade" }],
  openGraph: {
    title: "Gabriel Trindade | Desenvolvimento de Sites & Apps",
    description: "Transformando visões em experiências digitais de alta performance.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body 
        className="bg-dark-bg text-white selection:bg-brand-primary/30"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

