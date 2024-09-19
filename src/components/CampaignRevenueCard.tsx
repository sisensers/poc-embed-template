import React, { useState } from "react";
import { ExecuteQuery, QueryState } from "@sisense/sdk-ui";
import * as DM from "../sample-ecommerce";
import { measureFactory, Data, Cell, Filter } from "@sisense/sdk-data";
import { Typography, Grid, CircularProgress, IconButton } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CampaignRevenueCard: React.FC = () => {
  const [campaignRevenues, setCampaignRevenues] = useState<{ campaign: string, revenue: number }[]>([]);
  const itemsPerPage = 4; // Hardcoded to show top 4 results

  const activeFilters: Filter[] = [];

  return (
    <div style={{ margin: "20px", padding: "20px", backgroundColor: "#ffffff" }}>
      <Typography variant="h5" component="div" gutterBottom>
        Campaigns
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Revenue
      </Typography>

      <Grid container spacing={2} style={{ marginTop: 16 }}>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold">
            <ExecuteQuery
              dataSource={DM.DataSource}
              dimensions={[DM.Category.Category]}
              measures={[measureFactory.sum(DM.Commerce.Revenue, "Campaign Revenue")]}
              filters={activeFilters}
            >
              {(queryState: QueryState) => {
                if (queryState.isLoading) {
                  return <CircularProgress />;
                }

                if (queryState.error) {
                  return <div>Error: {queryState.error.message}</div>;
                }

                const data: Data = queryState.data;
                const revenues = data.rows.map((row: any) => ({
                  campaign: row[0].text,
                  revenue: row[1].data,
                }));

                // Only display top 4 campaign revenues
                const top4Revenues = revenues.slice(0, itemsPerPage);

                return (
                  <>
                    {top4Revenues.map((rev, index) => (
                      <div key={index}>
                        <Typography variant="body1">
                          {rev.campaign} Revenue
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          ${rev.revenue.toLocaleString()}
                        </Typography>
                      </div>
                    ))}
                  </>
                );
              }}
            </ExecuteQuery>
          </Typography>
        </Grid>
      </Grid>

      {/* Hardcoded Pagination Bubbles */}
      <Grid container justifyContent="center" style={{ marginTop: 16 }}>
        <IconButton size="small" color="primary">
          <FiberManualRecordIcon />
        </IconButton>
        <IconButton size="small" color="default">
          <FiberManualRecordIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default CampaignRevenueCard;
