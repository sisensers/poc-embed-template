import { ColumnChart } from '@sisense/sdk-ui';
import * as DM from '../sample-ecommerce';
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import { modifyChartStyle } from './border-radius';

const CodeExample = () => {
  return (
    <ColumnChart
      dataSet={DM.DataSource}
      dataOptions={{
        category: [DM.Commerce.Condition],
        value: [
          measureFactory.average(
            DM.Commerce.Revenue, 'Total Revenue')
        ],
        breakBy: [DM.Commerce.Date.Years],
      }}
      filters={[
        filterFactory.members(
          DM.Commerce.Date,
          ['2009-01-01', '2010-01-01', '2011-01-01']
        )
      ]}
      //call custom function to modify chart before render
      onBeforeRender={(options) => modifyChartStyle(options)}
    />
  );
};

export default CodeExample;
