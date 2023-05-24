import { Box, Input, TextField, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { MdInvertColors } from 'react-icons/md';
import { blackColor } from '../UseContext';

import './SearchBar.css';
function SearchBar() {
  const { color, setColor } = useContext(blackColor);

  return (
    <Box className="main-searchbar">
      <Box className="searchbar-Left">
        <SearchIcon sx={{ width: '40px', height: '40px', color: 'gray' }} />
        <input
          type="text"
          Placeholder="Search"
          style={{
            height: '30px',
            width: '250px',
            backgroundColor: color ? '#101010' : '#f5f5f5',
            border: color ? '0.4px solid white' : '0.5px solid black',
            borderRadius: '5px',
          }}
        />
      </Box>
      <Box className="searchbar-right">
        <MdInvertColors size={'40px'} onClick={() => setColor(!color)} />
      </Box>
    </Box>
  );
}

export default SearchBar;
