import React from 'react';
import { createRoot } from 'react-dom/client';
import TypeFlare from '../src/TypeFlare';

// MUI Components
import { Typography, Box, Paper, Divider, Button } from '@mui/material';

// Example wrapper
const ExampleBlock = ({ title, children }) => (
  <Paper
    elevation={3}
    sx={{
      padding: '1.5rem',
      marginBottom: '2rem',
      borderRadius: '12px',
      backgroundColor: '#f9f9f9'
    }}
  >
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ marginBottom: '1rem' }} />
    {children}
  </Paper>
);

const App = () => (
  <Box sx={{ fontFamily: 'monospace', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
    
    {/* 1. Basic Example */}
    <ExampleBlock title="1. Basic Usage with Confetti">
      <TypeFlare
        words={['Hello, World!', 'I am a React-Typeflare Component.', 'Install me from NPM.']}
        typingSpeed={120}
        deletingSpeed={60}
        delayBetweenWords={1000}
        loop={false}
        confettiOnComplete={true} 
      />
    </ExampleBlock>

    {/* 2. Different Speeds */}
    <ExampleBlock title="2. Different Typing & Deleting Speeds + Stars">
      <TypeFlare
        words={['Fast typing, slow deleting...', 'Slow typing, fast deleting...']}
        typingSpeed={50}
        deletingSpeed={200}
        delayBetweenWords={1500}
        loop={false}
        starsOnComplete={true} // 🌟 show stars when finished
      />
    </ExampleBlock>

    {/* 3. Custom Colors */}
    <ExampleBlock title="3. Custom Styling with Colors & Confetti">
      <TypeFlare
        words={['Blue text', 'Red text', 'Green text']}
        typingSpeed={100}
        deletingSpeed={100}
        delayBetweenWords={1000}
        loop={false}
        style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 'bold' }}
        confettiOnComplete={true}
      />
    </ExampleBlock>

    {/* 4. Multiple Lines */}
    <ExampleBlock title="4. Multiple TypeFlare Components Stacked + Mixed Effects">
      <Box>
        <TypeFlare
          words={['Frontend Developer', 'UI/UX Designer']}
          typingSpeed={80}
          deletingSpeed={50}
          delayBetweenWords={800}
          loop={false}
          starsOnComplete={true}
        />
        <TypeFlare
          words={['JavaScript Enthusiast', 'React Specialist']}
          typingSpeed={100}
          deletingSpeed={50}
          delayBetweenWords={800}
          loop={false}
          style={{ color: 'tomato' }}
          confettiOnComplete={true}
        />
      </Box>
    </ExampleBlock>

  </Box>
);

const container = document.getElementById('root');
if (!container) throw new Error('No #root element found in HTML.');
const root = createRoot(container);
root.render(<App />);
