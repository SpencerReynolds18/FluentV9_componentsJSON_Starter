# Fluent GitHub Profile Clone

A GitHub profile page clone built with **Fluent UI React v9**, showcasing the power of Fluent UI components, tokens, and Griffel styling.

## Features

- 🎨 **Fluent UI v9 Components** - Built entirely with `@fluentui/react-components`
- 🎯 **Design Tokens** - Consistent theming using Fluent UI design tokens
- 💅 **Griffel Styling** - CSS-in-JS styling with `@griffel/react`
- 🌙 **Dark Theme** - GitHub-inspired dark theme
- 📱 **Responsive Layout** - Clean, modern layout matching GitHub's design

## Components

- **NavigationBar** - Top navigation with search and user menu
- **ProfileSidebar** - User profile information and achievements
- **PopularRepositories** - Grid of pinned repositories
- **ContributionGraph** - GitHub-style contribution calendar
- **ContributionActivity** - Recent commits, PRs, and activity feed

## Getting Started

### Install Dependencies

You will need to run `npm install` when starting out with a branch of this repo in order to set up the dependencies.

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **Fluent UI React v9** - Component library
- **Griffel** - CSS-in-JS styling
- **TypeScript** - Type safety

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with FluentProvider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── GitHubProfile.tsx   # Main container component
│   ├── NavigationBar.tsx  # Top navigation
│   ├── ProfileSidebar.tsx  # User profile sidebar
│   ├── PopularRepositories.tsx
│   ├── ContributionGraph.tsx
│   └── ContributionActivity.tsx
└── .cursorrules            # Fluent UI v9 guidelines
```

## Fluent UI v9 Guidelines

This project follows strict Fluent UI v9 guidelines:

- ✅ Use only `@fluentui/react-components` components
- ✅ Use Griffel (`makeStyles`) for all styling
- ✅ Use Fluent UI design tokens for colors, spacing, typography
- ✅ Use `FluentProvider` with theme (webDarkTheme)
- ✅ Use `@fluentui/react-icons` for icons

See `.cursorrules` for complete guidelines.

## License

ISC
