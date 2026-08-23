import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://assessment.genxaipro.com"),
  title: "AI Readiness Assessment | genxaipro.com",
  description:
    "Discover your AI maturity level across 5 key dimensions. Get a personalised action plan in under 7 minutes.",
  openGraph: {
    title: "AI Readiness Assessment | genxaipro.com",
    description:
      "Discover your AI maturity level across 5 key dimensions. Get a personalised action plan in under 7 minutes.",
    url: "https://assessment.genxaipro.com",
    siteName: "GenX AI Pro",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Readiness Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Readiness Assessment | genxaipro.com",
    description:
      "Discover your AI maturity level across 5 key dimensions. Get a personalised action plan in under 7 minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
