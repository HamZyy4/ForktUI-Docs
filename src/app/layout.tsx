import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: {
    default: 'ForktUI Documentation',
    template: '%s · ForktUI',
  },
  description: 'Guides and API reference for ForktUI, a themeable Roblox UI library.',
  applicationName: 'ForktUI',
  icons: {
    icon: `${basePath}/favicon.svg`,
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
