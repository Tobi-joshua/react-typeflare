import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import TypeFlare from '../src/TypeFlare';

export default function BasicExample() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '1.5rem',
        marginBottom: '2rem',
        borderRadius: '12px',
        backgroundColor: '#e3f2fd',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        1. Basic Usage with Confetti
      </Typography>
      <Divider sx={{ marginBottom: '1rem' }} />
      <TypeFlare
        words={[
          'Hello, World!',
          'I am a React-TypeFlare Component.',
          'Install me from NPM.',
        ]}
        typingSpeed={200}
        deletingSpeed={60}
        delayBetweenWords={1000}
        loop
        confettiOnComplete
        sx={{ fontSize: '1.2rem', color: '#333' }}
      />
    </Paper>
  );
}
