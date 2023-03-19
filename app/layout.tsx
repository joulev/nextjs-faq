import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-slate-900 bg-slate-50 dark:text-slate-50 dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}
