# A window to explore the amazing world of Pokemons

This is a Pokemon cards explorer project developed as a Frontend coding test. The project is built using Next.js, a popular React framework for server-side rendering and static site generation.

## Project Setup

### Install Dependencies

Before running the project, ensure you have pnpm installed, as it is the required package manager for this project. To install the required modules, run the following command:

```[bash]
pnpm install
```

### Environment Variables

To use the project you must first copy the `.env.example file` and rename it as `.env.development` for developement environment or `.env.production` for production. And set the environment variables.

### Initiate Next Server

#### Production

```[bash]
pnpm build
pnpm start
```

#### Development

```[bash]
pnpm dev
```

*Voila! Happy exploring the world of Pokemon cards! 🌟*

### Project Strcture

```[bash]
- [Root Directory]
   ├──.github (Github actions) 
   ├── app (routing directory)
   │   └── api (API routes for client-side communication)
   ├── components
   │   ├── [ComponentName]
   │   │   └── StyledComponents (extended from MUI components or native elements)
   │   └── shared (shared components)
   ├── contexts (Application contexts)
   ├── data (Data source layer)
   ├── hooks (Application custom hooks)
   ├── icons
   ├── providers (Application providers)
   ├── styles (SCSS variables and global styles)
   ├── types (Application types)
   └── (other config files...)
```

### Open-Source Credit

- [Next.js](https://nextjs.org/)
- [Pokemon TCG Api](https://pokemontcg.io/)
- [MUI](https://mui.com/)
