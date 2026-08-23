import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genxaipro.com"),
  title: "GenX AI Pro — Make AI useful across the business",
  description:
    "Applied AI consultancy for experienced leaders and ambitious teams. Practical strategy, enablement and operating models that make AI useful.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GenX AI Pro — Make AI useful across the business",
    description:
      "Applied AI consultancy for experienced leaders and ambitious teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
