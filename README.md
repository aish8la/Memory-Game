# Pokemon Memory Game

A React-based memory card game where you try to click each Pokemon card only once. Test your memory and see how high you can score!

## How to Play

1. Click "Start Game" to begin
2. Click on Pokemon cards to score points
3. Try to click each card only once - clicking the same card twice ends the game
4. Cards shuffle after each click to test your memory
5. Beat your high score!

## Features

- **Dynamic Pokemon Data**: Fetches random Pokemon from the PokeAPI
- **Score Tracking**: Current score, high score, and last game score
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Card hover effects and loading animations
- **Clean UI**: Modern design with custom color palette

## Technologies Used

- **React 19** with Hooks
- **Vite** for build tooling
- **CSS Grid** for responsive layouts
- **PokeAPI** for Pokemon data
- **ESLint** for code quality

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── displays/     # Game screens (main menu, game over)
│   ├── game/         # Game components (Game, Card)
│   └── layout/       # Layout components (Header, Layout)
├── styles/           # Global styles
├── utils/            # Utility functions and API calls
└── assets/           # Fonts and static assets
```

## Attribution

### Fonts
- **Roboto** by Google Fonts - Licensed under [SIL Open Font License 1.1](https://openfontlicense.org)
  - Copyright 2011 The Roboto Project Authors (https://github.com/googlefonts/roboto-classic)

### APIs
- **Pokemon data and images** provided by [PokeAPI](https://pokeapi.co/)

## License

This project is open source and available under the MIT License.