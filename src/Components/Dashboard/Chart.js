import React, { useEffect, useState, useContext } from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Button, FormControl } from '@mui/material';
import { InputLabel, Select, MenuItem } from '@mui/material';
import { blackColor } from '../UseContext';

import axios from 'axios';

const Chart = () => {
  const { color, setColor } = useContext(blackColor);
  const [energy, setEnergy] = useState();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [sectorSelected, setsectorSelected] = useState('energy');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setsectorSelected(event.target.value);
  };
  const chartOptions = {
    chart: { type: 'spline', backgroundColor: color ? '#101010' : '#f5f5f5' },
    title: {
      text: 'Spline Graph',
    },
    xAxis: {
      categories: [],
      title: {
        text: 'Number of data points--->',
      },
      style: {
        fontcolor: color ? '#101010' : '#f5f5f5',
        fontFamily: '10px',
      },
    },
    yAxis: {
      title: {
        text: 'Amount or degree--->',
      },
    },
    series: [
      {
        name: 'Intensity Relevance Likelihood',
        data: energy,
      },
    ],
  };

  const getdata = async () => {
    const option = {
      url: 'http://localhost:8000/getinsert',
      headers: { 'content-type': 'application/json' },
      method: 'get',
    };
    try {
      let response = await axios(option);
      let data = response.data.data;
      let da = data.splice(0, 51);
      let dat = da.map((item) => {
        return item.intensity;
      });
      console.log(dat);
      setEnergy(dat);
      return data;
    } catch (e) {
      console.log('error');
    }
  };

  const intensity = async () => {
    let data = await getdata();
    let dataArray = [];
    for (let i = 0; i < data.length; i++) {
      if (dataArray.length >= 51) {
        break;
      }

      if (data[i].sector.toLowerCase() == sectorSelected.toLowerCase()) {
        dataArray.push(data[i].intensity);
      }
    }
    // console.log(intensity);
    setEnergy(dataArray);
  };
  const relevance = async () => {
    let data = await getdata();
    let dataArray = [];

    for (let i = 0; i < data.length; i++) {
      if (dataArray.length >= 51) {
        break;
      }

      if (data[i].sector.toLowerCase() == sectorSelected.toLowerCase()) {
        dataArray.push(data[i].relevance);
      }
    }
    // console.log(intensity);
    setEnergy(dataArray);
  };
  const likelihood = async () => {
    let data = await getdata();
    let dataArray = [];

    for (let i = 0; i < data.length; i++) {
      if (dataArray.length >= 51) {
        break;
      }

      if (data[i].sector.toLowerCase() == sectorSelected.toLowerCase()) {
        dataArray.push(data[i].likelihood);
      }
    }

    console.log(dataArray);
    // console.log(intensity);
    setEnergy(dataArray);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '25px',
        paddingLeft: '20px',
      }}
    >
      <Box
        className="averageBox"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '360px',
          textAlign: 'center',
          justifyContent: 'center',
          paddingLeft: '40px',
          paddingTop: '30px',
        }}
      >
        <Button
          sx={{
            backgroundColor: color ? '#101010' : '#f5f5f5',
            color: color ? '#f5f5f5' : '#101010',
            border: color ? '1px solid #f5f5f5' : '1px solid #101010',
          }}
          onClick={() => intensity()}
          value="intensity"
        >
          Intensity
        </Button>
        <Button
          onClick={() => relevance()}
          sx={{
            backgroundColor: color ? '#101010' : '#f5f5f5',
            color: color ? '#f5f5f5' : '#101010',
            border: color ? '1px solid #f5f5f5' : '1px solid #101010',
          }}
        >
          relevance
        </Button>
        <Button
          onClick={() => likelihood()}
          sx={{
            backgroundColor: color ? '#101010' : '#f5f5f5',
            color: color ? '#f5f5f5' : '#101010',
            border: color ? '1px solid #f5f5f5' : '1px solid #101010',
          }}
        >
          likelihood
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: color ? '#101010' : '#f5f5f5',
          color: color ? '#f5f5f5' : '#101010',
          border: color ? '1px solid #f5f5f5' : '1px solid #101010',
        }}
      >
        {' '}
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '250px',
          paddingLeft: '100px',
        }}
      >
        <FormControl sx={{ width: '100px' }}>
          <InputLabel id="dropdown-label">Sector</InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Energy">Energy</MenuItem>
            <MenuItem value="Manufacturing"> Manufacturing</MenuItem>
            <MenuItem value="Retail">Retail</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: '100px' }}>
          <InputLabel id="dropdown-label">Topic</InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="oil">Oil</MenuItem>
            <MenuItem value="gas"> Gas</MenuItem>
            <MenuItem value="market">Market</MenuItem>
          </Select>
        </FormControl>
      </Box> */}
    </Box>
  );
};

export default Chart;
