# 🎯 React Typeflare

A modern React project for building fast, interactive web applications.

## ✨ Features

- ⚡️ Fast and responsive UI
- 🛠 Built with React and modern tooling
- 📦 Easy to extend and customize

---

## 🚀 Getting Started

```bash
git clone https://github.com/Tobi-joshua/react-typeflare.git
cd react-typeflare
npm install
npm start
```

## 📜 Scripts

- `npm start` — Start the development server  
- `npm run build` — Build for production  
- `npm test` — Run tests  

---

## 📦 Manual Setup Without create-react-app

If you prefer to manually set up React without using `npx create-react-app`, follow these steps:

```bash
mkdir react-typeflare
cd react-typeflare
npm init -y
npm install react react-dom
npm install --save-dev parcel
```

**Directory structure:**

```
react-typeflare/
 ├── package.json
 ├── index.html
 ├── src/
 │    ├── index.js
 │    └── App.js
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React Typeflare</title>
</head>
<body>
  <div id="root"></div>
  <script src="./src/index.js"></script>
</body>
</html>
```

---

## 🌐 CDN Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>TypeFlare CDN Demo</title>
</head>
<body>
  <div id="root"></div>

  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/react-typeflare/dist/react-typeflare.umd.js"></script>

  <script>
    const { TypeFlare } = window.ReactTypeflare;
    const App = () => React.createElement(
      'div',
      { style: { fontSize: '2rem', fontFamily: 'monospace', padding: '2rem' } },
      React.createElement(TypeFlare, {
        words: ['Hello, World!', 'I am a React-Typeflare Component.', 'Install me from NPM.'],
        typingSpeed: 120,
        deletingSpeed: 60,
        delayBetweenWords: 1000,
        loop: true
      })
    );

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App));
  </script>
</body>
</html>
```

---

## ⚙️ Props

| Prop               | Type       | Default        | Description                               |
|--------------------|------------|----------------|-------------------------------------------|
| `words`            | `string[]` | `[]`           | List of phrases to type                   |
| `typingSpeed`      | `number`   | `100`          | ms per character typed                    |
| `deletingSpeed`    | `number`   | `50`           | ms per character deleted                  |
| `delayBetweenWords`| `number`   | `1500`         | Delay before typing next word             |
| `startDelay`       | `number`   | `0`            | Delay before animation starts             |
| `loop`             | `boolean`  | `true`         | Repeat indefinitely                       |
| `reverse`          | `boolean`  | `false`        | Loop backwards when finished              |
| `pauseOnHover`     | `boolean`  | `false`        | Pause typing when hovered                 |
| `className`        | `string`   | `''`           | Custom class for wrapper                  |
| `cursor`           | `boolean`  | `true`         | Show blinking cursor                      |
| `cursorChar`       | `string`   | `|`            | Character for cursor                      |
| `cursorClassName`  | `string`   | `"tf-cursor"`  | Class for cursor styling                  |
| `onComplete`       | `function` | `() => {}`     | Callback after completion (if not looping)|
