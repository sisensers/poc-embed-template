import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ReferralAndReviewCards: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Stacked cards in a single column */}
      <Grid item xs={12}>
        {/* Referrals Card */}
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            backgroundColor: '#ffffff',
            border: 'none',
            marginBottom: '16px' // Space between the two cards
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Referrals
          </Typography>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>
            45
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Referrals Revenue
          </Typography>
          <Typography variant="h5">
            $885
          </Typography>
        </Paper>

        {/* Reviews Card */}
        <Paper
          elevation={3}
          style={{
            padding: '20px',
            backgroundColor: '#ffffff',
            border: 'none'
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Reviews
          </Typography>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>
            3,213
          </Typography>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Avg. Rating
          </Typography>
          <Typography variant="h5" style={{ display: 'flex', alignItems: 'center' }}>
            4.53 
            <StarIcon style={{ color: '#ffb400', marginLeft: '8px' }} />
            <StarIcon style={{ color: '#ffb400' }} />
            <StarIcon style={{ color: '#ffb400' }} />
            <StarIcon style={{ color: '#ffb400' }} />
            <StarIcon style={{ color: '#ffb400' }} />
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ReferralAndReviewCards;
