import React from 'react';
import { createRoot } from 'react-dom/client';
import TypeFlare from '../src/TypeFlare';

const App = () => (
  <div style={{ fontSize: '2rem', fontFamily: 'monospace', padding: '2rem' }}>
    <TypeFlare
      words={[
        'Hello, World!',
        'I am a React-Typeflare Component.',
        'Install me from NPM.'
      ]}
      typingSpeed={120}
      deletingSpeed={60}
      delayBetweenWords={1000}
      loop={true}
    />
  </div>
);

const container = document.getElementById('root');
if (!container) throw new Error('No #root element found in HTML.');
const root = createRoot(container);
root.render(<App />);
