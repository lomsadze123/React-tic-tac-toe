# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# React Tic Tac Toe
This is a classic Tic-Tac-Toe game implemented using React and React Router. It allows two players to take turns marking the spaces in a 3x3 grid until one player wins or the game ends in a draw.

## Setup
1. Clone the Repository: Start by cloning the repository to your local machine using the following command:
```bash
git clone https://github.com/lomsadze123/React-tic-tac-toe.git
```
2. Install Dependencies: Install the project dependencies using npm or yarn:
```bash
npm install
```
3. Start the Application: Run the development server to see the application in action:

```bash
npm run dev
```

## Built With
- Semantic HTML5 (TSX)
- Styled Components
- Mobile First Approach
- Media Queries
- React
- TypeScript
- useState Hook
- useEffect Hook
- React Router
