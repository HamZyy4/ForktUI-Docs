import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Github,
  Layers3,
  Palette,
  Sparkles,
  Workflow,
} from 'lucide-react';

const features = [
  {
    icon: Layers3,
    title: 'Composable elements',
    description: 'Build interfaces from windows, tabs, sections, and focused controls.',
  },
  {
    icon: Palette,
    title: 'Theme control',
    description: 'Use built-in themes or define a palette that matches your experience.',
  },
  {
    icon: Workflow,
    title: 'Useful interactions',
    description: 'Connect callbacks, config persistence, notifications, and key systems.',
  },
];

const code = `local ForktUI = loadstring(game:HttpGet(
    "https://raw.githubusercontent.com/HamZyy4/ForktUI/main/dist/main.lua"
))()

local Window = ForktUI:CreateWindow({
    Title = "My Hub",
    Theme = "Dark",
})

local Tab = Window:Tab({ Title = "General" })

Tab:Button({
    Title = "Run action",
    Callback = function()
        print("Hello from ForktUI")
    end,
})`;

export default function HomePage() {
  return (
    <main className="landing-shell">
      <div className="landing-grid" aria-hidden="true" />
      <section className="landing-hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            ROBLOX UI LIBRARY <span className="eyebrow-divider">/</span> LUAU
          </div>
          <h1>
            Build cleaner interfaces
            <span className="hero-title-accent">with ForktUI.</span>
          </h1>
          <p className="hero-description">
            A flexible UI library for Roblox projects. Compose windows, tabs, and controls
            with a consistent visual system and a straightforward Luau API.
          </p>
          <div className="hero-actions">
            <Link className="action-primary" href="/docs/installation">
              <BookOpen className="size-4" />
              Read the docs
              <ArrowRight className="size-4" />
            </Link>
            <Link className="action-secondary" href="https://github.com/HamZyy4/ForktUI" target="_blank" rel="noreferrer">
              <Github className="size-4" />
              View source
              <ArrowUpRight className="size-3.5 opacity-60" />
            </Link>
          </div>
          <div className="hero-meta">
            <span><Sparkles className="size-3.5" /> Open source</span>
            <span className="meta-separator" />
            <span><Braces className="size-3.5" /> Luau-first API</span>
            <span className="meta-separator" />
            <span>MIT license</span>
          </div>
        </div>

        <div className="preview-frame">
          <div className="preview-topbar">
            <div className="window-controls"><i /><i /><i /></div>
            <span>quick-start.luau</span>
            <span className="preview-language">LUAU</span>
          </div>
          <div className="preview-code-wrap">
            <pre><code>{code}</code></pre>
          </div>
          <div className="preview-footer">
            <span className="preview-status"><span /> Example setup</span>
            <span>ForktUI · graphite interface system</span>
          </div>
        </div>
      </section>

      <section className="feature-section" aria-label="Library capabilities">
        <div className="section-heading">
          <span>DESIGNED FOR BUILDING</span>
          <p>Core building blocks, without unnecessary complexity.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon"><Icon className="size-5" /></div>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom-cta">
        <div>
          <span className="cta-kicker">GET STARTED</span>
          <h2>Start with the essentials.</h2>
          <p>Follow the installation guide, then explore each component and its options.</p>
        </div>
        <Link href="/docs" className="cta-link">
          Explore documentation <ArrowUpRight className="size-4" />
        </Link>
      </section>

      <footer className="landing-footer">
        <span>ForktUI</span>
        <span>Maintained by sukitovone · Built for Roblox developers</span>
        <Link href="https://github.com/HamZyy4/ForktUI" target="_blank" rel="noreferrer">GitHub</Link>
      </footer>
    </main>
  );
}
