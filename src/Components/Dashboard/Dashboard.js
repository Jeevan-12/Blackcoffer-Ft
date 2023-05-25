import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Box, Button, Card, Typography } from '@mui/material';
import intensit from '../../Photo/intensity.png';
import img1 from '../../Photo/puzzle.png';
import like from '../../Photo/like.png';
import './Dashboard.css';
import Chart from './Chart';
import { blackColor } from '../UseContext';

function Dashboard() {
  const { color, setColor } = useContext(blackColor);
  const [intensity, setIntensity] = useState();
  const [relevance, setrelevance] = useState();
  const [likelihood, setlikelihood] = useState();
  const getdata = async () => {
    let option = {
      url: 'https://black-coffer-bt.vercel.app/get',
      headers: { 'content-type': 'application/json' },
      method: 'get',
    };
    try {
      let response = await axios(option);
      let data = response.data.data;
      let intensity = data.map((item) => {
        return item.intensity;
      });
      let relevance = data.map((item) => {
        return item.relevance;
      });
      let likelihood = data.map((item) => {
        return item.likelihood;
      });

      var intensityAvg = intensity.reduce(function (p, c, i, a) {
        return p + c / a.length;
      }, 0);
      var relevanceAvg = relevance.reduce(function (p, c, i, a) {
        return p + c / a.length;
      }, 0);
      var likelihoodAvg = likelihood.reduce(function (p, c, i, a) {
        return p + c / a.length;
      }, 0);
      let num1 = intensityAvg.toFixed(2);
      let num2 = relevanceAvg.toFixed(2);
      let num3 = likelihoodAvg.toFixed(2);
      setIntensity(num1);
      setrelevance(num2);
      setlikelihood(num3);
    } catch (e) {
      console.log('error');
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <Box className="DashBoard">
      <Box
        className="averageBox"
        sx={{
          backgroundColor: color ? '#101010' : '#f5f5f5',
          color: color ? '#f5f5f5' : '#101010',
          border: color ? '#101010' : '#101010',
        }}
      >
        <Card
          className="avgCard"
          sx={{
            backgroundColor: color ? '#101010' : '#f5f5f5',
            color: color ? '#f5f5f5' : '#101010',
            border: color ? '1px solid #f5f5f5' : '1px solid #101010',
          }}
        >
          <Typography>Intensity</Typography>
          <img src={intensit} alt="logo" className="img" />
          <Typography>{intensity}</Typography>
        </Card>
        <Card
          className="avgCard"
          sx={{
            backgroundColor: color ? '#101010' : '#f5f5f5',
            color: color ? '#f5f5f5' : '#101010',
            border: color ? '1px solid #f5f5f5' : '1px solid #101010',
          }}
        >
          <Typography>Relevance</Typography>
          <img src={img1} alt="logo" className="img" />
          <Typography>{relevance}</Typography>
        </Card>
        <Card
          className="avgCard"
          sx={{
            backgroundColor: color ? '#101010' : '#f5f5f5',
            color: color ? '#f5f5f5' : '#101010',
            border: color ? '1px solid #f5f5f5' : '1px solid #101010',
          }}
        >
          <Typography>Likelihood</Typography>
          <img src={like} alt="logo" className="img" />
          <Typography>{likelihood}</Typography>
        </Card>
      </Box>

      <Box>
        <Chart />
      </Box>
    </Box>
  );
}

export default Dashboard;
