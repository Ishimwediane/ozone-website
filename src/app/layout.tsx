import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Ozone Entertainment | Events, Fashion, Film & Artist Management",
  description: "Professional entertainment services in Kigali, Rwanda. Event organizing, fashion agency (NAF MODEL EMPIRE), film production, artist management, and women empowerment programs.",
  keywords: ["Ozone Entertainment", "Events Kigali", "Fashion Agency Rwanda", "Film Production", "Artist Management", "Empowering Her", "NAF MODEL EMPIRE"],
  authors: [{ name: "Ozone Entertainment" }],
  openGraph: {
    title: "Ozone Entertainment | Capturing Moments, Empowering Dreams",
    description: "Professional entertainment services for events, fashion, film, and artist management in Kigali, Rwanda.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
