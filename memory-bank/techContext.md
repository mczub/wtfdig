# Technical Context

This document details the technologies used, development setup, technical constraints, dependencies, and tool usage patterns within the project.

## Technologies Used
- **Frontend Framework**: SvelteKit (with Svelte)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: Bun
- **Build Tool**: Vite
- **Linting**: ESLint
- **Testing**: (To be determined, no explicit testing framework visible yet)

## Development Setup
1.  **Clone the repository**: `git clone [repository-url]`
2.  **Navigate to the project directory**: `cd wtfdig`
3.  **Install dependencies**: `bun install`
4.  **Run the development server**: `bun dev`

## Technical Constraints
- **Static Hosting**: The application is designed for static site generation, meaning no server-side logic or dynamic database interactions after deployment. All data must be pre-rendered or loaded from static files.
- **Client-Side Only**: All processing and rendering occur in the user's browser.
- **Image Loading**: Performance considerations for loading a potentially large number of high-resolution strategy images.
- **Browser Compatibility**: Must support modern web browsers.

## Dependencies
- **Svelte**: Core UI framework.
- **SvelteKit**: Application framework for Svelte.
- **Tailwind CSS**: For utility-first styling.
- **Vite**: Fast build tool.
- **TypeScript**: For type safety.
- **ESLint**: For code quality and linting.
- **`@sveltejs/adapter-static`**: SvelteKit adapter for static site generation.
- **`@sveltejs/kit`**: SvelteKit core.
- **`autoprefixer`**: PostCSS plugin to parse CSS and add vendor prefixes.
- **`postcss`**: Tool for transforming CSS with JavaScript.
- **`prettier`**: Code formatter.
- **`prettier-plugin-svelte`**: Prettier plugin for Svelte files.
- **`tslib`**: TypeScript helpers.
- **`typescript`**: TypeScript compiler.

## Tool Usage Patterns
- **`bun dev`**: Starts the local development server for live preview.
- **`bun build`**: Builds the static site for deployment.
- **`bun preview`**: Locally previews the built static site.
- **`bun check`**: Runs SvelteKit's type checking.
- **`bun lint`**: Runs ESLint for code quality checks.
- **`bun format`**: Runs Prettier for code formatting.
- **Git**: Version control for collaborative development.
- **VS Code**: Primary IDE, with Svelte and Tailwind CSS extensions recommended for development.
