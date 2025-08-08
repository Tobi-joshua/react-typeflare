import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import TypeFlare from '../src/TypeFlare';

export default function ColorsExample() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '1.5rem',
        marginBottom: '2rem',
        borderRadius: '12px',
        backgroundColor: '#e8f5e9',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Custom Styling with Colors & Confetti
      </Typography>
      <Divider sx={{ marginBottom: '1rem' }} />
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
          color: 'primary.main',
        }}
      />
    </Paper>
  );
}
