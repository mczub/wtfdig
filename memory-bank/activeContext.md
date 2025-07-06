# Active Context

This document captures the current work focus, recent changes, next steps, active decisions, important patterns, and project insights.

## Current Work Focus
The current focus is on initializing and populating the core Memory Bank documentation files to establish a comprehensive understanding of the WTFDIG project. This includes defining the project's purpose, technical architecture, and development practices.

## Recent Changes
- Updated `projectbrief.md` to include the Dragonsong's Reprise (Ultimate) fight, aligning the documentation with the existing project structure.
- Initialized `productContext.md` with details about WTFDIG's purpose, how it works, and user experience goals.
- Initialized `systemPatterns.md` with an overview of the SvelteKit static site architecture, key technical decisions (SvelteKit, Tailwind CSS, SSG, Markdown, Image-based strategies), design patterns (component-based, module-based routing, data-driven UI), component relationships (including a Mermaid diagram), and critical implementation paths.
- Initialized `techContext.md` with a detailed list of technologies used, development setup instructions (using Bun), technical constraints, dependencies, and tool usage patterns.

## Next Steps
The memory bank is up to date. Awaiting the next task.

## Active Decisions and Considerations
- The project is a static site, which simplifies deployment but requires all strategy data to be pre-rendered or loaded from static files.
- Bun is the preferred package manager and should be consistently used in documentation and commands.
- The structure of strategy data (types, file organization) is crucial for dynamic content loading.

## Important Patterns and Preferences
- Emphasis on clear, concise, and role-specific information for raid strategies.
- Use of SvelteKit's load functions (`+page.ts`) for data fetching and preparation.
- Organization of static assets (images) by patch and fight for easy retrieval.

## Learnings and Project Insights
- The project's core value lies in its ability to quickly provide relevant, condensed information to players during complex raid encounters.
- The static nature of the site means that content updates will require a rebuild and redeployment, but offers high performance and low hosting costs.
- The file-based routing and component structure of SvelteKit are well-suited for organizing the various raid strategies.
