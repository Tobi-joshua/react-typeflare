import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import TypeFlare from '../src/TypeFlare';

export default function SpeedExample() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '1.5rem',
        marginBottom: '2rem',
        borderRadius: '12px',
        backgroundColor: '#fce4ec',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        2. Different Typing & Deleting Speeds + Stars
      </Typography>
      <Divider sx={{ marginBottom: '1rem' }} />
      <TypeFlare
        words={[
          'Fast typing, slow deleting...',
          'Slow typing, fast deleting...',
        ]}
        typingSpeed={50}
        deletingSpeed={200}
        delayBetweenWords={1500}
        loop
        starsOnWordChange
        sx={{ fontSize: '1.2rem', color: '#673ab7', fontWeight: 500 }}
      />
    </Paper>
  );
}
