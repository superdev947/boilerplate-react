# React TypeScript Boilerplate

A modern, production-ready boilerplate for building React applications with TypeScript and Webpack. This starter template includes all the essential tools and configurations you need to start developing React applications quickly.

## ✨ Features

- ⚛️ **React 18.3** - Latest React with modern features
- 📘 **TypeScript 5.7** - Type-safe development
- 📦 **Webpack 5** - Modern module bundler with optimized configuration
- 🚀 **React Router v7** - Client-side routing
- 🎨 **CSS Support** - Import CSS files directly
- 🔍 **ESLint** - Code quality and consistency
- 🔥 **Hot Module Replacement** - Fast development experience
- 🏗️ **Production Build** - Optimized build with code splitting
- 🎯 **Path Aliases** - Use `@/` for cleaner imports
- 🌐 **Node Polyfills** - Browser compatibility for Node.js modules
- 📁 **Asset Handling** - Support for images, fonts, and audio files

## 📋 Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

## 🚀 Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/superdev947/boilerplate-react.git
cd boilerplate-react
npm install
```

### Development

Start the development server with hot reload:

```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `build/` directory.

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
boilerplate-react/
├── public/              # Static files
│   └── index.html       # HTML template
├── src/                 # Source files
│   ├── App.tsx          # Main App component
│   ├── index.tsx        # Application entry point
│   └── index.css        # Global styles
├── webpack.config.js    # Webpack development configuration
├── webpack-build.config.js  # Webpack production configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies
```

## 🛠️ Configuration

### TypeScript

TypeScript is configured via `tsconfig.json`. The configuration includes:
- JSX support for React
- Modern ES2020 target
- Strict type checking
- Path aliases (`@/` points to `src/`)

### Webpack

Two webpack configurations are provided:

- **webpack.config.js** - Development configuration with:
  - Hot Module Replacement
  - Source maps
  - Development server on port 3000
  
- **webpack-build.config.js** - Production configuration with:
  - Code minification
  - CSS extraction
  - Optimized bundles

### ESLint

ESLint is configured with:
- TypeScript support
- React best practices
- Modern JavaScript features

## 🎨 Asset Support

The boilerplate supports the following asset types:

- **Images**: `.png`, `.svg`, `.jpg`, `.jpeg`, `.gif`, `.webp`
- **Fonts**: `.woff`, `.woff2`, `.eot`, `.ttf`, `.otf`
- **Audio**: `.wav`, `.mp3`, `.ogg`

Assets can be imported directly in your TypeScript/JavaScript files.

## 📦 Dependencies

### Main Dependencies

- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Routing library

### Dev Dependencies

- TypeScript and React type definitions
- Webpack and loaders
- ESLint and plugins
- CSS processing tools
- Asset optimization plugins

## 🔧 Customization

### Port Configuration

To change the development server port, edit `webpack.config.js`:

```javascript
devServer: {
  port: 3000, // Change this to your preferred port
  // ...
}
```

### Path Aliases

Add custom path aliases in both `webpack.config.js` and `tsconfig.json`:

```javascript
// webpack.config.js
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
  }
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

## 🌐 Browser Support

The project uses Browserslist configuration for:

**Production:**
- \>0.2% market share
- Not dead browsers
- Excludes Opera Mini

**Development:**
- Latest Chrome, Firefox, and Safari versions

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint to check code quality |

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
