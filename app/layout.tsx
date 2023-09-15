import { Metadata } from "next";
import { RootProvider } from "next-docs-ui/provider";
import { DocsLayout } from "next-docs-ui/layout";
import { Hanken_Grotesk } from "next/font/google";
import { tree } from "./source";
import "next-docs-ui/style.css";
import "./global.css";
import { TitleProvider } from "./title-provider";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <RootProvider>
          <DocsLayout
            tree={tree}
            nav={{
              title: "Next.js Discord Common Questions",
              githubUrl: "https://github.com/joulev/nextjs-discord-common-questions",
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
