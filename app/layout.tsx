import type { Metadata } from "next";
import { plus_jakarta_sans, red_hat_display } from "@/styles/fonts";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Rifki Bayu Ariyanto — Full-Stack Web Developer",
  description:
    "Portfolio of Rifki Bayu Ariyanto, Full-Stack Web Developer specializing in clean, high-performance web applications and digital systems.",
  icons: {
    icon: "/images/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta_sans.variable} ${red_hat_display.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
