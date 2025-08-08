import React from 'react';
import { createRoot } from 'react-dom/client';
import TypeFlare from '../src/TypeFlare';

// MUI Components
import { Typography, Box, Paper, Divider } from '@mui/material';

// Example wrapper with dynamic background color
const ExampleBlock = ({ title, children, bgColor }) => (
  <Paper
    elevation={3}
    sx={{
      padding: '1.5rem',
      marginBottom: '2rem',
      borderRadius: '12px',
      backgroundColor: bgColor || '#f9f9f9'
    }}
  >
    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
      {title}
    </Typography>
    <Divider sx={{ marginBottom: '1rem' }} />
    {children}
  </Paper>
);

const App = () => (
  <Box
    sx={{
      fontFamily: 'monospace',
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto'
    }}
  >

    {/* 1. Basic Example */}
    <ExampleBlock title="1. Basic Usage with Confetti" bgColor="#e3f2fd">
      <TypeFlare
        words={[
          'Hello, World!',
          'I am a React-TypeFlare Component.',
          'Install me from NPM.'
        ]}
        typingSpeed={120}
        deletingSpeed={60}
        delayBetweenWords={1000}
        loop
        confettiOnComplete 
        sx={{ fontSize: '1.2rem', color: '#333' }}
      />
    </ExampleBlock>

    {/* 2. Different Speeds */}
    <ExampleBlock title="2. Different Typing & Deleting Speeds + Stars" bgColor="#fce4ec">
      <TypeFlare
        words={[
          'Fast typing, slow deleting...',
          'Slow typing, fast deleting...'
        ]}
        typingSpeed={50}
        deletingSpeed={200}
        delayBetweenWords={1500}
        loop
        starsOnWordChange 
        sx={{ fontSize: '1.2rem', color: '#673ab7', fontWeight: 500 }}
      />
    </ExampleBlock>

    {/* 3. Custom Colors */}
    <ExampleBlock title="3. Custom Styling with Colors & Confetti" bgColor="#e8f5e9">
      <TypeFlare
        words={['Blue text', 'Red text', 'Green text']}
        typingSpeed={100}
        deletingSpeed={100}
        delayBetweenWords={1000}
        loop
        confettiOnComplete
        sx={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'primary.main'
        }}
      />
    </ExampleBlock>

    {/* 4. Multiple Lines */}
    <ExampleBlock title="4. Multiple TypeFlare Components Stacked + Mixed Effects" bgColor="#fff8e1">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <TypeFlare
          words={['Frontend Developer', 'UI/UX Designer']}
          typingSpeed={80}
          deletingSpeed={50}
          delayBetweenWords={800}
          loop
          starsOnWordChange
          sx={{ fontSize: '1.2rem', color: '#4caf50' }}
        />
        <TypeFlare
          words={['JavaScript Enthusiast', 'React Specialist']}
          typingSpeed={100}
          deletingSpeed={50}
          delayBetweenWords={800}
          loop
          confettiOnComplete
          sx={{ fontSize: '1.2rem', color: 'tomato', fontWeight: 'bold' }}
        />
      </Box>
    </ExampleBlock>

  </Box>
);

const container = document.getElementById('root');
if (!container) throw new Error('No #root element found in HTML.');
const root = createRoot(container);
root.render(<App />);
