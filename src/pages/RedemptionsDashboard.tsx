import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DashboardWidget } from '@sisense/sdk-ui';
import * as DM from '../sample-ecommerce';
import CampaignRevenueCard from '../components/CampaignRevenueCard'; // Assuming this is the path to the custom component
import ReferralAndReviewCards from '../components/ReferralAndReviewCards'; // Combined Referrals and Reviews component

// Dashboard ID
const dashboardOid = "66d9214e5ba5560032cdfbc5";

// Widget IDs in order from top-left to bottom-right
const widgetIds = [
  "66d922b45ba5560032cdfbd7", // Widget 1
  "66d922c45ba5560032cdfbd9", // Widget 2
  "66d922dc5ba5560032cdfbdd", // Widget 3
  "66d922e95ba5560032cdfbe1", // Widget 4
  "66d9217e5ba5560032cdfbc7", // Widget 5
  "66d921c85ba5560032cdfbc9", // Widget 6
  "66d921f25ba5560032cdfbcb", // Widget 7
  "66d922835ba5560032cdfbd5"  // Widget 8
];

const widgetTitles = [
  "Revenue Trend",
  "Age Demographics",
  "Buyer Analysis",
  "Site Popularity",
  "Signups",
  "Loyalty Checkins and Sales",
  "Loyalty Checkins",
  "Redemptions and Sales"
];

const RedemptionsDashboard = () => {
  return (
    <Grid container spacing={2} padding={2}>
      {/* First row: 4 widgets */}
      {widgetIds.slice(0, 4).map((widgetId, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Paper
            elevation={3}
            style={{
              padding: '16px',
              backgroundColor: '#ffffff',
              border: 'none'
            }}
          >
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
              {widgetTitles[index]}
            </Typography>
            <DashboardWidget
              dashboardOid={dashboardOid}
              widgetOid={widgetId}
              styleOptions={{
                spaceAround: 'Medium',
                height: 200,
              }}
              drilldownOptions={{
                drilldownDimensions: [
                  DM.Brand.Brand,
                  DM.Category.Category
                ]
              }}
            />
          </Paper>
        </Grid>
      ))}

      {/* Second row: 3 widgets with middle widget wider */}
      <Grid item xs={12} md={3}>
        <Paper
          elevation={3}
          style={{
            padding: '16px',
            backgroundColor: '#ffffff',
            border: 'none',
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
            {widgetTitles[4]}
          </Typography>
          <DashboardWidget
            dashboardOid={dashboardOid}
            widgetOid={widgetIds[4]}
            styleOptions={{
              spaceAround: 'Medium',
              height: 380,
            }}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Brand.Brand,
                DM.Category.Category
              ]
            }}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          style={{
            padding: '16px',
            backgroundColor: '#ffffff',
            border: 'none'
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
            {widgetTitles[5]}
          </Typography>
          <DashboardWidget
            dashboardOid={dashboardOid}
            widgetOid={widgetIds[5]}
            styleOptions={{
              spaceAround: 'Medium',
              height: 380,
            }}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Brand.Brand,
                DM.Category.Category
              ]
            }}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper
          elevation={3}
          style={{
            padding: '16px',
            backgroundColor: '#ffffff',
            border: 'none'
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
            {widgetTitles[6]}
          </Typography>
          <DashboardWidget
            dashboardOid={dashboardOid}
            widgetOid={widgetIds[6]}
            styleOptions={{
              spaceAround: 'Medium',
              height: 380,
            }}
            drilldownOptions={{
              drilldownDimensions: [
                DM.Brand.Brand,
                DM.Category.Category
              ]
            }}
          />
        </Paper>
      </Grid>

      {/* Third row: ReferralAndReviewCards + Widget 8 (wider) + CampaignRevenueCard */}
      <Grid container item spacing={2}>
        {/* ReferralAndReviewCards on the left */}
        <Grid item xs={12} md={3}>
          <ReferralAndReviewCards />
        </Grid>

        {/* Widget 8 in the middle (wider) */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            style={{
              padding: '16px',
              backgroundColor: '#ffffff',
              border: 'none',
              height: 500  // Matches the widget height
            }}
          >
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '16px' }}>
              {widgetTitles[7]}
            </Typography>
            <DashboardWidget
              dashboardOid={dashboardOid}
              widgetOid={widgetIds[7]}
              styleOptions={{
                height: 380,
              }}
              drilldownOptions={{
                drilldownDimensions: [
                  DM.Brand.Brand,
                  DM.Category.Category
                ]
              }}
            />
          </Paper>
        </Grid>

        {/* CampaignRevenueCard on the right */}
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            style={{
              padding: '16px',
              backgroundColor: '#ffffff',
              border: 'none',
              height: 500  // Matches the widget above in row 2
            }}
          >
            <CampaignRevenueCard />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RedemptionsDashboard;
