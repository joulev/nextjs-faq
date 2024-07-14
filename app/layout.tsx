import "./global.css";
import { DocsLayout } from "fumadocs-ui/layout";
import { RootProvider } from "fumadocs-ui/provider";
import { Hanken_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { docsOptions } from "./layout.config";
import type { Metadata } from "next";

const font = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <body>
        <div className="bg-secondary border-b py-2 font-semibold text-center">
          Ceasefire now! 🕊️🇵🇸
        </div>
        <RootProvider>
          <DocsLayout {...docsOptions}>{children}</DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-faq.com"),
};
