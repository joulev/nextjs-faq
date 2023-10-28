import { Metadata } from "next";
import { RootProvider } from "next-docs-ui/provider";
import { DocsLayout } from "next-docs-ui/layout";
import { Hanken_Grotesk } from "next/font/google";

import { tree } from "@/app/source";
import { TitleProvider } from "@/app/title-provider";

import "next-docs-ui/style.css";
import "@/app/global.css";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
        <RootProvider>
          <DocsLayout
            tree={tree}
            nav={{
              title: <>FAQ for the Next.js Discord&nbsp;server</>,
              githubUrl: "https://github.com/joulev/nextjs-faq",
            }}
          >
            <TitleProvider tree={tree}>{children}</TitleProvider>
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "https://static.joulev.dev/images/favicon.svg", type: "image/svg+xml" },
      { url: "https://static.joulev.dev/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: [{ url: "https://static.joulev.dev/images/apple-touch-icon.png", sizes: "180x180" }],
  },
};
