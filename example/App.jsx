import React from 'react';
import { createRoot } from 'react-dom/client';
import { Box } from '@mui/material';

import BasicExample from './BasicExample';
import SpeedExample from './SpeedExample';
import ColorsExample from './ColorsExample';
import MultipleLinesExample from './MultipleLinesExample';


const App = () => (
  <Box
    sx={{
      fontFamily: 'monospace',
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto',
    }}
  >
    <BasicExample />
    <SpeedExample />
    <ColorsExample />
    <MultipleLinesExample />
  </Box>
);

const container = document.getElementById('root');
if (!container) throw new Error('No #root element found in HTML.');
const root = createRoot(container);
root.render(<App />);
