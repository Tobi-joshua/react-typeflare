# 🎯 React Typeflare

![npm version](https://img.shields.io/npm/v/react-typeflare?color=blue&style=flat-square)
![npm downloads](https://www.npmjs.com/package/react-typeflare)
![license](https://img.shields.io/npm/l/react-typeflare?color=orange&style=flat-square)


React TypeFlare is a lightweight, easy-to-use, and highly customizable React component that creates beautiful typewriter-style text animations. It supports smooth typing and deleting effects, configurable speeds, looping options, pause-on-hover, reverse typing, and visual flair like confetti bursts and cursor customization. Ideal for adding engaging dynamic text in React applications with minimal setup.



---

## 📦 Installation

You can install the latest version via **npm** or **yarn**:

```bash
npm install react-typeflare@1.0.4
# or
yarn add react-typeflare@1.0.4

---

## Peer Dependencies

`react-typeflare` requires **React** and **ReactDOM** as peer dependencies. This means these packages must be installed in your project separately.

To install them along with their TypeScript types, run:

```bash
npm install react react-dom @types/react @types/react-dom
# or with yarn
yarn add react react-dom @types/react @types/react-dom


## 🚀 Usage

```js
import React from 'react';
import { TypeFlare } from 'react-typeflare';

export default function App() {
  return (
    <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
      <TypeFlare
        words={[
          'Hello, World!',
          'I am a React-Typeflare Component.',
          'Install me from NPM.'
        ]}
        typingSpeed={120}
        deletingSpeed={60}
        delayBetweenWords={1000}
        loop
      />
    </div>
  );
}
```

## Demos

### Basic Usage with Confetti  
![Basic Usage with Confetti](https://github.com/Tobi-joshua/react-typeflare/raw/main/assets/basic_usage_with_confetti-ezgif.com-optimize.gif)

### Different Typing & Deleting Speeds  
![Different Typing & Deleting Speeds](https://github.com/Tobi-joshua/react-typeflare/raw/main/assets/DifferentTypingDeletingSpeeds-ezgif.com-video-to-gif-converter.gif)

### Custom Styling with Colors & Confetti  
![Custom Styling with Colors & Confetti](https://github.com/Tobi-joshua/react-typeflare/raw/main/assets/CustomStylingwithColorsConfetti-ezgif.com-video-to-gif-converter.gif)

### Multiple TypeFlare Components Stacked + Mixed Effects  
![Multiple TypeFlare Components Stacked + Mixed Effects](https://github.com/Tobi-joshua/react-typeflare/raw/main/assets/MultipleTypeFlareComponentsStackedMixedEffects-ezgif.com-video-to-gif-converter.gif)




## ✨ Highlights Compared to `react-typed`

✅ **Single prop (`words`) array** – no need to wrap text in strings or children elements.

✅ **Built-in deleting speed control (`deletingSpeed`)** without extra config hacks.

✅ **Delay between words (`delayBetweenWords`)** is first-class.

✅ **Reverse looping (`reverse`)** – type forward then backward seamlessly.

✅ **Pause on hover (`pauseOnHover`)** without writing custom handlers.

✅ **Simpler API for cursor customization** (`cursor`, `cursorChar`, `cursorClassName`).

✅ **`onComplete` callback** without manually tracking Typed.js events.

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

| Prop               | Type       | Default       | Description                                 |
|--------------------|------------|---------------|---------------------------------------------|
| `words`            | `string[]` | `[]`          | List of phrases to type                      |
| `typingSpeed`      | `number`   | `100`         | Milliseconds per character typed            |
| `deletingSpeed`    | `number`   | `50`          | Milliseconds per character deleted          |
| `delayBetweenWords`| `number`   | `1500`        | Delay before typing the next word            |
| `startDelay`       | `number`   | `0`           | Delay before animation starts                |
| `loop`             | `boolean`  | `true`        | Repeat animation indefinitely                |
| `reverse`          | `boolean`  | `false`       | Loop backwards when finished                  |
| `pauseOnHover`     | `boolean`  | `false`       | Pause typing when hovered                    |
| `className`        | `string`   | `''`          | Custom CSS class for the wrapper             |
| `cursor`           | `boolean`  | `true`        | Show blinking cursor                          |
| `cursorChar`       | `string`   | `|`           | Character used as the cursor                  |
| `cursorClassName`  | `string`   | `"tf-cursor"` | CSS class for cursor styling                  |
| `onComplete`       | `function` | `() => {}`    | Callback after completion (if not looping)  |


---

## License

MIT License © 2025 [Tobi Joshua Samuel]

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:
