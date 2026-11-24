import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'ForktUI-Docs';
const basePath = isGithubPages ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withMDX(config);
