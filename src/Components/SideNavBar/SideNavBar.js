import { Box, Typography, Button, Card } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../Photo/energy.png';
import { SideBarContent } from './SideBarContent';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import './SideNavBar.css';

function SideNavBar() {
  const [expand, setExpand] = useState(true);
  return (
    <Box
      className="sidebar-Top"
      sx={{
        width: expand ? '15%' : '5%',
        transitionDuration: '0.8s',
      }}
    >
      {expand ? (
        <Box className="sidebar">
          <Box
            className="sidebar-first"
            sx={{
              columnGap: expand ? '10%' : '0%',
            }}
          >
            <img src={logo} alt="img" sx={{ width: '50%' }} />

            <Typography
              sx={{
                fontSize: '23px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                color: 'gray',
              }}
            >
              Energy Chart
            </Typography>
            <ArrowCircleLeftIcon
              className="moving-button"
              onClick={() => setExpand(!expand)}
            />
          </Box>
          <Box className="card">
            {SideBarContent.map((item, i) => {
              return (
                <Box className="singlecard" key={i}>
                  <Typography>{item.icon}</Typography>
                  <Box className="nameitem">{item.name}</Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Box className="sidebar">
          <Box
            className="sidebar-first"
            sx={{
              columnGap: expand ? '10%' : '0%',
            }}
          >
            <img src={logo} alt="img" sx={{ width: '50%' }} />

            <ArrowCircleLeftIcon
              className="moving-button"
              onClick={() => setExpand(!expand)}
            />
          </Box>
          <Box className="card">
            {SideBarContent.map((item, i) => {
              return (
                <Box className="card" key={i}>
                  <Typography>{item.icon}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SideNavBar;
