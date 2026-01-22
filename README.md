# WTFDIG - Where The F\*ck Do I Go?

WTFDIG is a helper tool for Final Fantasy XIV players that enables them to view condensed strategy guides for various high-end duties. Users can select a fight, specific strategies, their role, and their light party to get customized, easy-to-read guides with visual aids.

This project is built with SvelteKit and Tailwind CSS, and it is designed to be a fast, client-side, statically-generated website.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This project uses [Bun](https://bun.sh/) as the package manager and runtime. Please install it before proceeding.

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/mczub/wtfdig.git
   ```
2. Install dependencies:
   ```sh
   bun install
   ```

## Development

To start the development server, run:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Available Scripts

- `bun run dev`: Runs the app in the development mode.
- `bun run build`: Builds the app for production to the `build` folder.
- `bun run preview`: Locally previews the production build.
- `bun run check`: Runs `svelte-check` to validate Svelte components.
- `bun run lint`: Lints the codebase using ESLint and Prettier.
- `bun run format`: Formats the codebase with Prettier.

## Project Structure

- **`src/routes`**: Contains the pages for the application, following SvelteKit's file-based routing. Each fight has its own route.
- **`src/components`**: Contains reusable Svelte components.
- **`src/lib`**: Contains utility functions, type definitions, and other shared code.
- **`static`**: Contains all the static assets, including strategy images, organized by fight.
