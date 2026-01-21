import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const schibsted_Grotesk = Schibsted_Grotesk({
  variable: "--font-schibsted_grotesk",
  subsets: ["latin"],
});

const sartian_Mono = Martian_Mono({
  variable: "--font-sartian_mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The hub for every dev event you mustn't miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibsted_Grotesk.variable} ${sartian_Mono.variable} min-h-screen antialiased`}
      >
        <Navbar />
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#FFFFFF"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.01}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
