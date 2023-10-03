import "./globals.css";
import type { Metadata } from "next";

import { Inter, Saira_Extra_Condensed, Alata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// Headings
const saira_extra_condensed = Saira_Extra_Condensed({ subsets: ["latin"], weight: ["400", "700"],  variable: '--font-saira_extra_condensed' });
// Body, subheadings
const alata = Alata({ subsets: ["latin"], weight: "400", variable: '--font-Alata'});

export const metadata: Metadata = {
  title: "Lassonde Blockchain Association",
  description: "Welcome to Lassonde Blockchain Association Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alata.variable} ${saira_extra_condensed.className}`}>{children}</body>
    </html>
  );
}
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <div>{children}</div>;
// }
