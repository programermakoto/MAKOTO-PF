import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "MAKOTO公式サイト【エンジニアのあそび/KANOAGROUP/MAKO'sクッキング】",
  description: "エンジニアとしてのIT情報や技術情報を発信しています。他にも会社や個人のサイトを運営しています。MAKO'sクッキングのレシピサイトも公開中。",
 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
