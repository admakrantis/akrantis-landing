import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Akrantis — Infraestrutura de Rastreabilidade Ambiental",
  description:
    "Akrantis centraliza licenças, condicionantes, parceiros, MTRs e certificados em uma única infraestrutura de rastreabilidade ambiental. Para indústrias brasileiras.",
  openGraph: {
    title: "Akrantis — Infraestrutura de Rastreabilidade Ambiental",
    description:
      "Compliance ambiental e rastreabilidade de resíduos para indústrias complexas.",
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
