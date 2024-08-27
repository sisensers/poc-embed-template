import React from "react";
import { ExecuteQuery, QueryState } from "@sisense/sdk-ui";
import { measureFactory, Data, Cell, Filter } from "@sisense/sdk-data";
import { Grid, Typography, CircularProgress, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import * as DM from "../sample-ecommerce";

interface KPIComponentProps {
  label: string;
  measure: any;
  index: number;
  filters: Filter[]; 
}

const formatNumber = (value: number): string => {
  const numericValue = typeof value === "number" ? value : parseFloat(value);
  if (isNaN(numericValue)) return "N/A";

  if (numericValue >= 1e9) {
    return (numericValue / 1e9).toFixed(1) + "B";
  } else if (numericValue >= 1e6) {
    return (numericValue / 1e6).toFixed(1) + "M";
  } else if (numericValue >= 1e3) {
    return (numericValue / 1e3).toFixed(1) + "K";
  } else {
    return numericValue.toFixed(2); // Rounds to the nearest 100th
  }
};

const KPIComponent: React.FC<KPIComponentProps> = ({
  label,
  measure,
  index,
  filters,
}) => {
  return (
    <ExecuteQuery
      dataSource={DM.DataSource}
      dimensions={[]}
      measures={[measure]}
      filters={filters} // Apply the filters
    >
      {(queryState: QueryState) => {
        if (queryState.isLoading) {
          return <CircularProgress />;
        }

        if (queryState.error) {
          return <div>Error: {queryState.error.message}</div>;
        }

        if (!queryState.data || queryState.data.rows.length === 0) {
          return <Typography variant="body2">No data available</Typography>;
        }

        const data: Data = queryState.data;
        const cell = data.rows[0][0] as Cell;
        const value =
          typeof cell.data === "number" ? cell.data : parseFloat(cell.data);

        const formattedValue = formatNumber(value);
        const subMeasure = value * 0.1;
        const isPositive = subMeasure > 1000;

        return (
          <Box
            textAlign="center"
            width="100%"
            padding={2}
            borderLeft={index !== 0 ? "1px solid rgba(0, 0, 0, 0.1)" : "none"}
          >
            <Typography variant="subtitle1">{label}</Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#F85432", // Orange color for the main value
              }}
            >
              {formattedValue}
            </Typography>
            <Typography variant="body2">
              {isPositive ? (
                <span style={{ color: "green", fontWeight: "bold" }}>
                  <ArrowUpwardIcon fontSize="small" />
                  {formatNumber(subMeasure)}%
                </span>
              ) : (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <ArrowDownwardIcon fontSize="small" />
                  {formatNumber(subMeasure)}%
                </span>
              )}
            </Typography>
          </Box>
        );
      }}
    </ExecuteQuery>
  );
};

const SPIComponent: React.FC<{ filters: Filter[] }> = ({ filters }) => {
  const measures = [
    measureFactory.sum(DM.Commerce.Quantity, "Loyalty Members"),
    measureFactory.sum(DM.Commerce.Cost, "Current Monthly Spend"),
    measureFactory.countDistinct(DM.Commerce.BrandID, "Predicted Monthly Spend"),
    measureFactory.countDistinct(DM.Commerce.CountryID, "Innactive Population"),
    measureFactory.sum(DM.Commerce.Revenue, "Predicated Innactive Population"),
    measureFactory.countDistinct(DM.Commerce.AgeRange, "Engagement"),
  ];

  const labels = [
    "Loyalty Members",
    "Current Monthly Spend",
    "Predicted Monthly Spend",
    "Innactive Population",
    "Predicated Innactive",
    "Engagement",
  ];

  return (
    <Box padding={2}>
      {/* Title */}
      <Typography variant="h6" align="left" gutterBottom>
        Weekly Assessment
      </Typography>

      <Grid container spacing={0} justifyContent="center">
        {measures.map((measure, index) => (
          <Grid item xs={2} key={index}>
            <KPIComponent
              label={labels[index]}
              measure={measure}
              index={index}
              filters={filters} // Pass filters to each KPIComponent
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SPIComponent;
