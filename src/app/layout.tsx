import { Barlow_Semi_Condensed } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const barlowFont = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata = {
  title: "Rock Paper Scissors",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${barlowFont.className} h-screen w-screen overflow-hidden`}
        style={{
          background:
            "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        }}
      >
        {children}
      </body>
    </html>
  );
}
