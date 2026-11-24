<div align="center">
  <img src="https://www.image2url.com/r2/default/images/1795519428668-08e17509-eb29-45cf-b1a2-7ddb06372b47.png" width="112" height="112" alt="ForktUI logo" />
  <h1>ForktUI Documentation</h1>
  <p><strong>Official setup guides and API reference for the ForktUI Roblox UI library.</strong></p>
  <p><a href="https://hamzyy4.github.io/ForktUI-Docs/">Open documentation</a> · <a href="https://github.com/HamZyy4/ForktUI">Library source</a></p>
  <p>Maintained by <strong>sukitovone</strong></p>
</div>

## Quick loader reference

```lua
local ForktUI = loadstring(game:HttpGet(
    "https://raw.githubusercontent.com/HamZyy4/ForktUI/main/dist/main.lua"
))()
```

The remote loader requires a client runtime that supports both HTTP retrieval and `loadstring`. Standard Roblox Studio projects should use the documented Rojo / ModuleScript installation path instead.

## Documentation development

```bash
npm install
npm run dev
```

Build the static website for GitHub Pages:

```bash
GITHUB_PAGES=true npm run build
```

The project pins Next.js `15.5.29`. After applying this update, run `npm install` once and commit the refreshed `package-lock.json` together with `package.json`; the supplied lockfile still records the previous `15.4.5` version. Run `npm ci` only after those two files are synchronized.

The export is written to `out/`. GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.

## Project details

- Framework: Next.js 15 with Fumadocs MDX.
- Content: MDX pages in `content/docs/`.
- Maintainer: `sukitovone`.
- Website: <https://hamzyy4.github.io/ForktUI-Docs/>.
