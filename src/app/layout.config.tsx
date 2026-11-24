import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Github, BookOpen } from 'lucide-react';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="flex items-center gap-2.5">
        <span className="brand-mark" aria-hidden="true">F</span>
        <span className="font-semibold tracking-tight">ForktUI</span>
        <span className="brand-version">DOCS</span>
      </span>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      icon: <BookOpen className="size-4" />,
    },
    {
      type: 'icon',
      label: 'GitHub repository',
      text: 'GitHub',
      icon: <Github className="size-4" />,
      url: 'https://github.com/HamZyy4/ForktUI',
    },
  ],
};
