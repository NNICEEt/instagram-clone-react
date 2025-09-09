# Instagram Clone (Frontend)

This project is an **Instagram-like frontend application** built with a modern tech stack and a scalable, feature-based architecture.

---

## 🚀 Tech Stack

- **React 19** – Leveraging the latest React features.
- **TypeScript** – For robust type safety across the application.
- **Vite** – High-performance build tool for rapid development.
- **TanStack Router** – Fully type-safe routing for React.
- **TanStack Query** – Powerful asynchronous state management, caching, and data synchronization.
- **Chakra UI** – A simple, modular, and accessible component library to build the UI.
- **Lucide React** – A beautiful and consistent icon library.
- **ESLint & Prettier** – For maintaining code quality and consistent formatting.

---

## 📂 Project Structure

The project follows a feature-based organization to keep the codebase modular and scalable.

```bash
src/
  app/             # Application-level components (e.g., layouts, shells)
  assets/          # Static assets like images and icons
  common/          # Shared components, hooks, and utilities
  features/        # Feature-based modules (e.g., feed, profile)
  lib/             # Core libraries and external service configurations (e.g., fetcher)
  routes/          # Route definitions for TanStack Router
  themes/          # Theming and styling configuration
  main.tsx         # Main application entry point
```

---

## 🛠️ Setup & Run

This project uses [Bun](https://bun.sh/) as the package manager and runtime.

```bash
# Install dependencies
bun install

# Start the development server
bun dev

# Build the application for production
bun run build

# Lint the codebase
bun lint

# Preview the production build
bun preview
```
