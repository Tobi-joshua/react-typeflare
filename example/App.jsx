import React from 'react';
import ReactDOM from 'react-dom';
import TypeFlare from '../src/TypeFlare';

const App = () => (
  <div style={{ fontSize: '2rem', fontFamily: 'monospace', padding: '2rem' }}>
    <TypeFlare
      words={['Hello, World!', 'I am a React-Typeflare Component.', 'Install me from NPM.']}
      typingSpeed={120}
      deletingSpeed={60}
      delayBetweenWords={1000}
      loop={true}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
// If you are using a bundler like Webpack or Parcel, ensure you have the necessary loaders configured for JSX and React.
// If you are using Create React App, it should work out of the box.
// If you are using a custom setup, ensure you have Babel configured to transpile JSX and React code.
// For example, you can use the following Babel configuration in your babel.config.js file:
// ```javascript
// module.exports = {
//   presets: ['@babel/preset-env', '@babel/preset-react'],
// };
// ```
// Make sure to install the necessary dependencies:
// ```bash
// npm install @babel/preset-env @babel/preset-react --save-dev
// ```
// If you are using TypeScript, ensure you have the necessary TypeScript configuration in your tsconfig.json file:
// ```json
// {
//   "compilerOptions": {
//     "target": "es5",
//     "module": "commonjs",
//     "jsx": "react",
//     "strict": true,
//     "esModuleInterop": true,
//     "skipLibCheck": true,
//     "forceConsistentCasingInFileNames": true
//   },
//   "include": ["src/**/*"],
//   "exclude": ["node_modules", "dist"]
// }
// ```
// Make sure to install the necessary dependencies:
// ```bash
// npm install typescript @types/react @types/react-dom --save-dev