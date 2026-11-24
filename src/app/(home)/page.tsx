import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BookOpen, Braces, CheckCircle2, Github,
  Layers3, MousePointer2, Palette, Smartphone, Sparkles, Workflow,
} from 'lucide-react';
import { CopyLoader } from '@/components/copy-loader';

const logo = 'https://www.image2url.com/r2/default/images/1795519428668-08e17509-eb29-45cf-b1a2-7ddb06372b47.png';
const loader = `local ForktUI = loadstring(game:HttpGet(
    "https://raw.githubusercontent.com/HamZyy4/ForktUI/main/dist/main.lua"
))()`;
const quickStart = `${loader}\n\nlocal Window = ForktUI:CreateWindow({\n    Title = "My Interface",\n    Author = "sukitovone",\n    Theme = "Dark",\n    User = { Enabled = true },\n})\n\nlocal Tab = Window:Tab({ Title = "General" })\nTab:Button({\n    Title = "Run action",\n    Callback = function() print("ForktUI ready") end,\n})`;

const features = [
  { icon: Layers3, title: 'Composable interface', description: 'Build a window from tabs, sections, controls, and layout elements with a consistent API.' },
  { icon: Palette, title: 'Theme-aware components', description: 'Use the built-in graphite palette or register a theme that fits your experience.' },
  { icon: Workflow, title: 'Practical interactions', description: 'Connect callbacks, dialogs, popups, notifications, key systems, and optional config storage.' },
  { icon: Smartphone, title: 'Viewport-aware layout', description: 'Automatic scaling and compact component spacing help the interface fit smaller screens.' },
  { icon: MousePointer2, title: 'Account card', description: 'Show the local Roblox account card and open a profile summary from the sidebar.' },
  { icon: CheckCircle2, title: 'Documented API', description: 'Read installation notes, method references, examples, and environment limitations.' },
];

export default function HomePage() {
  return (
    <main className="landing-shell">
      <div className="landing-grid" aria-hidden="true" />
      <section className="landing-hero">
        <div className="hero-copy">
          <div className="hero-brandline">
            <img src={logo} alt="ForktUI logo" width="42" height="42" />
            <span><strong>FORKTUI</strong><small>ROBLOX INTERFACE TOOLKIT</small></span>
          </div>
          <div className="eyebrow"><span className="eyebrow-dot" /> LUAU COMPONENT LIBRARY <span className="eyebrow-divider">/</span> CLIENT UI</div>
          <h1>Interfaces with<span className="hero-title-accent">structure and clarity.</span></h1>
          <p className="hero-description">ForktUI is a modular interface toolkit for Roblox client projects. Create a clear window, compose controls, and keep interactions consistent across your experience.</p>
          <div className="hero-actions">
            <Link className="action-primary" href="/docs/installation"><BookOpen className="size-4" />Installation guide<ArrowRight className="size-4" /></Link>
            <Link className="action-secondary" href="https://github.com/HamZyy4/ForktUI" target="_blank" rel="noreferrer"><Github className="size-4" />Browse source<ArrowUpRight className="size-3.5 opacity-60" /></Link>
          </div>
          <div className="hero-meta"><span><Sparkles className="size-3.5" /> Open source</span><span className="meta-separator" /><span><Braces className="size-3.5" /> Luau-first</span><span className="meta-separator" /><span>MIT license</span></div>
        </div>
        <div className="quickstart-panel">
          <div className="quickstart-heading">
            <div className="window-controls"><i /><i /><i /></div>
            <div><span>QUICK START</span><small>loader · window · first control</small></div>
            <CopyLoader code={quickStart} />
          </div>
          <pre className="quickstart-code"><code>{quickStart}</code></pre>
          <div className="quickstart-footnote"><span><span className="status-dot" /> Example snippet</span><span>ForktUI / Luau</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <div><span className="strip-index">01</span><strong>A distinct visual system</strong><p>Graphite surfaces, restrained accents, clear hierarchy.</p></div>
        <div><span className="strip-index">02</span><strong>Small, focused APIs</strong><p>Composable methods and explicit callbacks.</p></div>
        <div><span className="strip-index">03</span><strong>Practical integration</strong><p>Loader and ModuleScript workflows are documented separately.</p></div>
      </section>

      <section className="feature-section" aria-label="Library capabilities">
        <div className="section-heading"><div><span>LIBRARY CAPABILITIES</span><h2>Built around the interface workflow.</h2></div><p>Explore the building blocks available in the current source.</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, description }, index) => (
          <article className="feature-card" key={title}><div className="feature-card-top"><span>0{index + 1}</span><div className="feature-icon"><Icon className="size-5" /></div></div><h3>{title}</h3><p>{description}</p></article>
        ))}</div>
      </section>

      <section className="workflow-section">
        <div className="workflow-copy"><span className="cta-kicker">CHOOSE YOUR WORKFLOW</span><h2>Use the right installation path.</h2><p>The remote loader is intended for compatible client runtimes. For a standard Roblox Studio project, use the ModuleScript workflow with Rojo instead.</p></div>
        <div className="workflow-options">
          <Link href="/docs/load-forktui" className="workflow-option"><span className="workflow-icon"><Braces className="size-4" /></span><span><strong>Remote loader</strong><small>HTTP retrieval and supported loadstring runtime</small></span><ArrowUpRight className="size-4" /></Link>
          <Link href="/docs/installation" className="workflow-option"><span className="workflow-icon"><Layers3 className="size-4" /></span><span><strong>Roblox Studio / Rojo</strong><small>Install the source as a ModuleScript</small></span><ArrowUpRight className="size-4" /></Link>
        </div>
      </section>

      <section className="bottom-cta"><div><span className="cta-kicker">DOCUMENTATION</span><h2>Go from first window to full interface.</h2><p>Follow the setup guide, then browse controls and advanced API pages.</p></div><Link href="/docs" className="cta-link">Browse all guides <ArrowUpRight className="size-4" /></Link></section>
      <footer className="landing-footer"><span className="footer-brand"><img src={logo} alt="" width="24" height="24" /> ForktUI</span><span>Maintained by sukitovone · Documentation for Roblox developers</span><Link href="https://github.com/HamZyy4/ForktUI" target="_blank" rel="noreferrer">GitHub</Link></footer>
    </main>
  );
}
