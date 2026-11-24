import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Github, BookOpen } from 'lucide-react';

const logo = 'https://www.image2url.com/r2/default/images/1795519428668-08e17509-eb29-45cf-b1a2-7ddb06372b47.png';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="brand-lockup">
        <img className="brand-image" src={logo} alt="" width={30} height={30} />
        <span className="brand-name">ForktUI</span>
        <span className="brand-version">DOCS</span>
      </span>
    ),
  },
  links: [
    { text: 'Documentation', url: '/docs', icon: <BookOpen className="size-4" /> },
    {
      type: 'icon',
      label: 'GitHub repository',
      text: 'GitHub',
      icon: <Github className="size-4" />,
      url: 'https://github.com/HamZyy4/ForktUI',
    },
  ],
};
