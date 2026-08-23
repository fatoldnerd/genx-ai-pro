import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-roi-calculator-chi.vercel.app"),
  title: "AI ROI Calculator — GenX AI Pro",
  description:
    "Estimate the time and commercial value AI could unlock for your role, workflows and team.",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "What could AI be worth? — GenX AI Pro",
    description: "A practical AI ROI calculator for leaders and teams.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
