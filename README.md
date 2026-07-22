<div align="center">
  <br />
  <img src="./public/assets/logo.png" alt="Nextflix Logo" width="200" />
  <br />
  <br />

  <h1>Nextflix</h1>

  <p>
    <strong>A feature-rich Netflix clone built with Next.js 14, TypeScript, and the TMDB API</strong>
  </p>

  <p>
    <a href="https://nextflix-azure.vercel.app/">🌐 View Demo</a>
    &nbsp;|&nbsp;
    <a href="#features">✨ Features</a>
    &nbsp;|&nbsp;
    <a href="#getting-started">🚀 Getting Started</a>
    &nbsp;|&nbsp;
    <a href="#tech-stack">⚙️ Tech Stack</a>
  </p>

  <br />

  ![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
  ![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

  <br />
  <br />

  <img src="./public/assets/demo.gif" alt="Nextflix Demo" width="800" style="border-radius: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);" />

  <br />
  <br />

  <p>
    <i>If you find this project useful, please consider giving it a ⭐ — it means a lot!</i>
  </p>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [API Endpoints](#-api-endpoints)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 📖 Overview

**Nextflix** is a modern, fully-responsive Netflix clone that demonstrates the power of Next.js 14 with the App Router pattern, TypeScript, and server-side rendering. It integrates with **The Movie Database (TMDB) API** to fetch real-time movie and TV show data, delivering a streaming-platform-like experience right in the browser.

The project showcases:
- A polished, Netflix-inspired UI with smooth animations powered by **Framer Motion**
- Dynamic content sections (Popular, Trending, Horror, Comedies, Drama, and more)
- Interactive media detail modals with rating, genre, and action buttons
- Responsive design that adapts seamlessly across desktop, tablet, and mobile
- Performance optimizations via dynamic imports and lazy loading

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎬 **Hero Banner** | Spotlight section featuring a randomly selected popular movie with synopsis and action buttons |
| 🎯 **Content Sections** | 11 curated media rows including Popular, Trending, Horror, Comedy, Action, Drama, Animation, and more |
| 🔍 **Media Detail Modal** | Rich modal overlay displaying rating, genre, overview, and interactive controls (Play, Add to List, Like, Dislike) |
| 📊 **Top 10 List** | Numbered featured cards for the "Top 10 in US Today" section |
| 🖼️ **Dynamic Cards** | Two card variants — default rounded cards and feature cards with rank indicators |
| 📱 **Fully Responsive** | Adaptive layout using custom breakpoints for mobile, tablet, and desktop |
| ⚡ **Performance Optimized** | Dynamic imports (`next/dynamic`), lazy-loaded components, and optimized image loading |
| 🎨 **Sass Modules** | Scoped styling with SCSS modules for maintainable and collision-free CSS |
| 🔗 **TMDB API Integration** | Real-time data fetching from The Movie Database API via custom proxy endpoints |
| 🎭 **Interactive UI** | Hover effects, smooth transitions, and micro-interactions powered by Framer Motion |

---

## 📸 Screenshots

> *(Screenshots coming soon — check the demo GIF above for a live preview!)*

| Login Page | Browse Page | Modal View |
|:---:|:---:|:---:|
| Netflix-style sign-in landing page | Content-rich browsing with multiple sections | Detailed media modal with actions |

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.2.35 | React framework with SSR, SSG, and API routes |
| [React](https://reactjs.org/) | 18.3.1 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.2 | Type-safe JavaScript |

### Styling & Animation
| Technology | Purpose |
|------------|---------|
| [Sass (SCSS Modules)](https://sass-lang.com/) | Scoped, maintainable stylesheets |
| [Framer Motion](https://www.framer.com/motion/) | Declarative animations and transitions |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon library for UI elements |

### Data & Networking
| Technology | Purpose |
|------------|---------|
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [TMDB API](https://www.themoviedb.org/) | Movie and TV show data source |

### Developer Tools
| Technology | Purpose |
|------------|---------|
| [ESLint](https://eslint.org/) | Code linting and quality |
| [Prettier](https://prettier.io/) | Code formatting |
| [Vercel](https://vercel.com/) | Deployment and hosting |

---

## 📁 Project Structure

```
nextflix/
├── public/               # Static assets (images, icons)
│   └── assets/
│       ├── avatar.png
│       ├── demo.gif
│       ├── loginBg.jpg
│       └── logo.png
├── components/           # Reusable UI components
│   ├── Banner/           # Hero spotlight section
│   ├── Button/           # Reusable button component
│   ├── Dialog.tsx        # Dialog utility
│   ├── Footer/           # Page footer
│   ├── Layout/           # Main layout wrapper
│   ├── List/             # Media list (Cards, FeatureCards)
│   ├── Modal/            # Media detail modal
│   └── Navbar/           # Navigation bar (Menu, Profile, SearchBar)
├── config/               # App configuration
│   ├── breakpoints.ts    # Responsive breakpoints
│   ├── genres.ts         # TMDB genre mappings
│   └── route.ts          # Route constants
├── context/              # React context providers
│   └── ModalContext.tsx   # Modal state management
├── hooks/                # Custom React hooks
│   ├── useDebounce.tsx
│   ├── useDimensions.ts
│   ├── useExternalClick.ts
│   └── useScrollLimit.ts
├── pages/                # Next.js pages & API routes
│   ├── api/              # Backend API proxies
│   │   ├── discover.ts
│   │   ├── popular.ts
│   │   └── trending.ts
│   ├── _app.tsx          # App wrapper
│   ├── browse.tsx        # Main browse page
│   ├── index.tsx         # Login/welcome page
│   └── search.tsx        # Search page (coming soon)
├── styles/               # SCSS modules
│   ├── _mixins.scss
│   ├── _variables.scss
│   ├── Banner.module.scss
│   ├── Browse.module.scss
│   ├── Button.module.scss
│   ├── Cards.module.scss
│   ├── Footer.module.scss
│   ├── globals.scss
│   ├── Login.module.scss
│   ├── Modal.module.scss
│   └── Navbar.module.scss
├── types/                # TypeScript type definitions
│   └── index.ts
├── utils/                # Utility functions
│   ├── apiResolvers.ts
│   ├── axios.ts
│   └── icons.ts
├── .eslintrc             # ESLint configuration
├── .prettierrc.js        # Prettier configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9.x or later (or **yarn** / **pnpm**)
- A **free TMDB API key** (get one [here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/nextflix.git
   cd nextflix
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example environment file:

   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` and add your TMDB API key:

   ```env
   TMDB_KEY=your_tmdb_api_key_here
   ```

   > **Note:** You can obtain a free API key by registering at [themoviedb.org](https://www.themoviedb.org/settings/api).

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

- The **Login page** will be displayed first — click **"Sign in"** to enter the browse experience.
- The **Browse page** loads content sections dynamically from the TMDB API.

### Building for Production

```bash
npm run build      # Create an optimized production build
npm run start      # Start the production server
```

### Linting & Formatting

```bash
npm run lint       # Run ESLint to check code quality
```

---

## 🌐 API Endpoints

Nextflix uses Next.js **API Routes** as proxies to the TMDB API, keeping the API key secure on the server side.

| Endpoint | Description | Parameters |
|----------|-------------|------------|
| `GET /api/popular` | Fetch popular movies or TV shows | `type` — `movie` or `tv` |
| `GET /api/trending` | Fetch trending content | `type` — `movie` or `tv`<br/>`time` — `day` or `week` |
| `GET /api/discover` | Discover content by genre | `type` — `movie` or `tv`<br/>`genre` — Genre ID (e.g., `27` for Horror) |

Each endpoint returns a standardized JSON response with a `data` array containing media objects.

---

## 🗺️ Roadmap

- [x] Netflix-inspired UI/UX
- [x] TMDB API integration with custom proxy endpoints
- [x] Dynamic content sections (11 categories)
- [x] Media detail modal with interactive controls
- [x] Responsive design for all screen sizes
- [x] Framer Motion animations
- [ ] **Search functionality** with debounced autocomplete
- [ ] **User authentication** (login/signup)
- [ ] **My List** feature (persistent watchlist)
- [ ] **Video player** integration (YouTube/TMDB trailers)
- [ ] **Internationalization** (multi-language support)
- [ ] **Unit & integration tests** (Jest + React Testing Library)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Nextflix, please follow these steps:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

Please ensure your code follows the existing style conventions (ESLint + Prettier) and includes appropriate type annotations.

---

## 📄 License

This project is **for educational purposes only**. It is not affiliated with, endorsed by, or connected to Netflix or The Movie Database (TMDB). All media data is provided by TMDB and is subject to their terms of use.

---

## 🙏 Acknowledgments

- [**Netflix**](https://www.netflix.com/) — for the UI/UX inspiration
- [**TMDB**](https://www.themoviedb.org/) — for providing the comprehensive media API
- [**Next.js**](https://nextjs.org/) — for the incredible React framework
- [**Vercel**](https://vercel.com/) — for seamless deployment
- The open-source community — for the amazing tools and libraries that made this project possible

---

<div align="center">
  <br />
  <p>
    Made with ❤️ by <a href="https://github.com/matlum2005">Matloob Ali</a>
  </p>
  <p>
    <a href="#">⬆ Back to Top</a>
  </p>
  <br />
</div>

