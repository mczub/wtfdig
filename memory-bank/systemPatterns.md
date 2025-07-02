# System Patterns

This document describes the system architecture, key technical decisions, design patterns in use, component relationships, and critical implementation paths.

## Architecture Overview
WTFDIG is a client-side web application built with SvelteKit. It primarily serves static content (HTML, CSS, JavaScript, images) and does not currently involve a backend server or database for dynamic content generation or storage. All strategy data is pre-rendered or loaded from static files.

## Key Technical Decisions
- **SvelteKit**: Chosen for its performance benefits (compiles to small, fast JavaScript bundles), reactivity, and ease of use for building interactive UIs.
- **Tailwind CSS**: Utilized for utility-first CSS styling, enabling rapid UI development and consistent design.
- **Static Site Generation (SSG)**: The application is designed to be pre-rendered into static HTML files, making it highly performant, scalable, and easy to deploy to static hosting services (e.g., GitHub Pages).
- **Markdown for Content**: Strategy content (text descriptions) is likely stored in Markdown files, which are then parsed and rendered into HTML. This allows for easy content management and updates without requiring code changes.
- **Image-based Strategies**: Visual components of strategies are handled through static image files, which are dynamically loaded based on user selections.

## Design Patterns
- **Component-Based Architecture**: Svelte components (`.svelte` files) encapsulate UI elements and their logic, promoting reusability and maintainability.
- **Module-Based Routing**: SvelteKit's file-system based routing (`src/routes/`) naturally organizes different sections of the application (e.g., `/71/chaotic/`).
- **Data-Driven UI**: The UI reacts to user selections (fight, strategy, role, light party) by dynamically loading and displaying relevant content and images.

## Component Relationships
The application structure revolves around SvelteKit's routing and component hierarchy:
- **`src/routes/`**: Contains the main pages of the application. Each directory within `routes` represents a route segment.
    - `+page.svelte`: The main Svelte component for a given route.
    - `+page.ts`: (or `+page.js`) SvelteKit's load function for fetching data for the page. This is where strategy data and image paths are likely determined.
- **`src/components/`**: Reusable Svelte components (e.g., `Cheatsheet.svelte`, `StratView.svelte`, `ImagePreview.svelte`).
- **`src/lib/`**: Contains utility functions (`utils.ts`) and type definitions (`types.ts`) used across the application.
- **`static/`**: Stores static assets, primarily strategy images organized by patch and fight (e.g., `static/71/strats/codcar/`).

```mermaid
graph TD
    A[User Interaction] --> B(Route Selection: /patch/fight)
    B --> C{+page.ts (Load Function)}
    C --> D[Fetch Strategy Data]
    D --> E[Filter Data by Role/Light Party]
    E --> F[Pass Data to +page.svelte]
    F --> G[Render UI with Components]
    G --> H(Cheatsheet.svelte)
    G --> I(StratView.svelte)
    G --> J(ImagePreview.svelte)
    H --> K[Display Role-Specific Text]
    I --> L[Display Strategy Images]
    J --> L
    L --> M[Load Images from static/]
```

## Critical Implementation Paths
- **Dynamic Content Loading**: Ensuring that the correct strategy images and text descriptions are loaded based on complex user selections (fight, multiple strategies, role, light party). This involves careful data structuring and filtering in the `+page.ts` load functions.
- **Image Management**: Efficiently managing and serving a potentially large number of static strategy images.
- **Responsive Design**: Ensuring the application is usable and visually appealing across various screen sizes, given its purpose as a quick reference tool.
- **Data Structure for Strategies**: Defining a clear and extensible data structure (likely in `src/lib/types.ts`) to represent fights, strategies, roles, and light party specific information.
