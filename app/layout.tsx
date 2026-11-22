import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home of Wrestling | The Fight Lives Here",
  description: "Breaking wrestling news, match cards, champions, superstars and events.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
