# Gatsby Develop via Docker (Alpine)

This setup runs `yarn run develop` inside a lightweight Node Alpine container using Yarn 4 (via Corepack).

## Quick Start

```sh
# One-time: ensure Yarn 4 locally (optional)
corepack enable && yarn set version stable && yarn install

# Build the image and start Gatsby develop
docker compose up --build

# After first build, just start
docker compose up
```

- App runs at <http://localhost:8000>
- Gatsby websocket runs at port 8001
- Source is bind-mounted, so edits in `src/` reflect live.

## Notes

- Dependencies: installed inside the container with Yarn 4 and `nodeLinker: node-modules`. A named volume caches `node_modules` for faster subsequent runs.
- Telemetry: disabled via `GATSBY_TELEMETRY_DISABLED=1`.
- If you add new packages:
  
  ```sh
  # Run inside the container (one-off)
  docker compose run --rm web yarn add <pkg>
  # Or dev deps
  docker compose run --rm web yarn add -D <pkg>
  
  ```

- If native modules (e.g., `sharp`) fail on macOS Apple Silicon, rebuild:
  
  ```sh
  docker compose run --rm web yarn rebuild
  ```

## Yarn 4 Notes

- This repo now uses Yarn 4. The config in `.yarnrc.yml` sets `nodeLinker: node-modules` to avoid PnP issues with Gatsby and some plugins.
- If you see peer dependency warnings, they’re informational unless builds fail. Use `yarn explain peer-requirements <hash>` to inspect.

## Cleaning

```sh
# Remove containers but keep node_modules volume
docker compose down

# Remove everything including cached node_modules
docker compose down -v
```
