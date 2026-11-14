# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ts-markdown-builder is a lightweight, tree-shakable TypeScript library for programmatically generating CommonMark and GFM-compliant markdown. It exposes a functional API of pure functions that return strings — no classes or special objects.

## Commands

```bash
pnpm test                    # Run all tests
pnpm test --watch            # Watch mode
pnpm test <path>             # Run specific test file (e.g., pnpm test src/__tests__/block.test.ts)
pnpm typecheck               # Type-check without emitting
pnpm lint                    # oxlint check
pnpm lint --fix              # Auto-fix lint issues
pnpm validate                # Run typecheck + lint + test (full check)
pnpm build                   # Full build (clean + commonjs + esm + types)
```

## Architecture

All source lives in `src/` with tests in `src/__tests__/`. The library is organized into functional modules:

- **`block.ts`** — Block-level elements: `heading`, `blockquote`, `codeBlock`, `list`, `orderedList`, `horizontalRule`
- **`inline.ts`** — Inline elements: `bold`, `italic`, `code`, `link`, `image`
- **`table.ts`** — `table()` with compact/formatted modes, auto column width calculation
- **`html.ts`** — HTML elements usable in markdown: `disclosure` (details/summary), `lineBreak`
- **`utils.ts`** — Shared helpers: `joinBlocks`, `prefixLines`, `escape`, `maxBackticks`
- **`index.ts`** — Barrel re-export of all public APIs and types (`TableOptions`, `DisclosureOptions`)

## Build System

Babel transpiles TypeScript to both CommonJS (`dist/commonjs/`) and ESM (`dist/esm/`). TypeScript compiler generates type declarations only (`dist/types/`). Bundle size is enforced at **1 kB** via size-limit.

## Code Conventions

- Pure functions returning strings; composable by passing one function's output as another's input
- Optional parameters use an `options` object pattern (e.g., `heading(text, { level: 2 })`)
- Tests use Jest with `toMatchInlineSnapshot()` for verifying markdown output
- oxfmt (Prettier-compatible, `.oxfmtrc.json`): single quotes, 2-space indent, trailing commas, 100-char lines
- Edge cases like backtick escaping in `code()`/`codeBlock()` and pipe escaping in `table()` are handled automatically
