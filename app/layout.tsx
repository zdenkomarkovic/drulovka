import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drulovka - izdavanje pokretnih skela",
  description:
    "Iznajmljivanje i montaža pokretnih skela za građevinske i industrijske radove u Nišu. Sigurna i stabilna rešenja za rad na visini. Kontaktirajte nas!",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  keywords: [
    "iznajmljivanje skela",
    "pokretne skele Nis",
    "montaža skela",
    "građevinske skele",
    "industrijske skele",
    "rad na visini",
    "sigurne skele",
    "najam skela",
    "najam skela nis",
    "iznajmljivanje skela nis",
    "skele nis",
  ],
  alternates: {
    canonical: "https://www.iznajmljivanjeskelanis.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
