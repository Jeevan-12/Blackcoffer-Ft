import React, { useContext, useState } from 'react';
import SideNavBar from './SideNavBar/SideNavBar.js';
import SearchBar from './SearchBar/SearchBar.js';
import { Box } from '@mui/material';
import Dashboard from './Dashboard/Dashboard.js';

function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '20px',
      }}
    >
      <SideNavBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '20px',
          width: '85%',
        }}
      >
        <SearchBar />
        <Dashboard />
      </Box>
    </Box>
  );
}

export default HomePage;
