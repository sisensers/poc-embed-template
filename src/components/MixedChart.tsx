import { ChartType, ChartWidget } from '@sisense/sdk-ui';
import * as DM from '../sample-ecommerce';
import { measureFactory } from '@sisense/sdk-data';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useState } from 'react';

const MixedChart = () => {

  const CHART_TYPES
    = ['pie', 'line', 'area', 'bar', 'column',
      'polar', 'funnel', 'treemap', 'sunburst'] as ChartType[];
  const [selectedChartType, setSelectedChartType]
    = useState<ChartType>('area');

  return (
    <ChartWidget
      chartType={selectedChartType}
      title='Change the chart type with the buttons below'
      dataSource={DM.DataSource}
      dataOptions={{
        category: [DM.Commerce.Date.Quarters],
        value: [
          measureFactory.sum(
            DM.Commerce.Revenue, 'Total Revenue')
        ],
        breakBy: [],
      }}
      styleOptions={{
        border: true,
        cornerRadius: 'Small',
      }}
      //topSlot: React nodes to be rendered above the chart
      topSlot={
        <ButtonGroup
          variant="outlined"
          size="small"
          fullWidth
          color="info"
          sx={{ py: 1, px: 3 }}
        >
          {CHART_TYPES.map((chartType) => {
            return (
              <Button
                key={chartType}
                size={'small'}
                variant={
                  chartType == selectedChartType
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => setSelectedChartType(chartType)}
              >
                {chartType}
              </Button>
            );
          })}
        </ButtonGroup>
      }
    />
  );
};

export default MixedChart;
