import * as React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import MixedChart from '../components/MixedChart';
import ColumnChart from '../components/ColumnChart'; 
import LineChart from '../components/LineChart'
import SPIComponent from '../components/kpiComponent';

function DashboardLayout() {
  return (
    <Box sx={{ p: 2, backgroundColor: '#FFFFFF' }}> {/* Dashboard background set to white */}
      <Grid container spacing={2}>
        {/* Top Row: SPIComponent */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, height: '100%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <SPIComponent filters={[]} />
          </Paper>
        </Grid>

        {/* Second Row: ColumnChart and LineChart */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* ColumnChart */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2, height: '100%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <ColumnChart />
              </Paper>
            </Grid>
            {/* LineChart */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2, height: '100%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <LineChart />
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Third Row: MixedChart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, height: '100%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <MixedChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardLayout;
