import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

const logo = 'https://www.image2url.com/r2/default/images/1795519428668-08e17509-eb29-45cf-b1a2-7ddb06372b47.png';

export const metadata = {
  title: { default: 'ForktUI — Roblox UI Library', template: '%s · ForktUI' },
  description: 'Official ForktUI documentation, loader examples, component guides, and Luau API reference.',
  applicationName: 'ForktUI',
  icons: { icon: logo, shortcut: logo, apple: logo },
  openGraph: {
    title: 'ForktUI Documentation',
    description: 'Component guides and API reference for the ForktUI Roblox UI library.',
    images: [logo],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <RootProvider search={{ enabled: false }}>{children}</RootProvider>
      </body>
    </html>
  );
}
