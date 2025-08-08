import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import TypeFlare from '../src/TypeFlare';

export default function InputExample() {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '1.5rem',
        marginBottom: '2rem',
        borderRadius: '12px',
        backgroundColor: '#f3e5f5',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        5. Text Input Mode (allowInput)
      </Typography>
      <Divider sx={{ marginBottom: '1rem' }} />
      <TypeFlare
        allowInput
        className="custom-input"
        style={{
          fontSize: '1.1rem',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          width: '100%',
        }}
        cursor={false}
      />
    </Paper>
  );
}
