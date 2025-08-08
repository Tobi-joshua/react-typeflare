import React from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';
import TypeFlare from '../src/TypeFlare';

export default function MultipleLinesExample() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '1.5rem',
        marginBottom: '2rem',
        borderRadius: '12px',
        backgroundColor: '#fff8e1',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        4. Multiple TypeFlare Components Stacked + Mixed Effects
      </Typography>
      <Divider sx={{ marginBottom: '1rem' }} />
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
    </Paper>
  );
}
