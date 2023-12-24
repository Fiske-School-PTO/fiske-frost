# Fiske Frost Website
This is the code repo for the Fiske Frost Website

## Components
### Frontend/Site Code
* [Astro](https://astro.build) - [Docs](https://docs.astro.build/en/getting-started/)
* [Tailwind CSS](https://tailwindcss.com/) - [Docs](https://tailwindcss.com/docs/installation)

### Backend
* Vercel

### Hosting Infrastructure
* [Vercel](https://vercel.com/)

### Build Infrastructure
* [NodeJS](https://nodejs.org/en) - Build language
* [pnpm](https://pnpm.io/) - Package manager
* [Vercel](https://vercel.com/docs/deployments/git/vercel-for-github)
## Developing
### 1. Clone the repo or use a GitHub Codespace
### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start development Server

```bash
pnpm dev
```

### Preview & Build

```bash
pnpm preview
pnpm build
```

We recommend using [pnpm](https://pnpm.io/) to save disk space on your computer.

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.

## 👀 Want to learn more?

Feel free to check out [Astro Docs](https://docs.astro.build)