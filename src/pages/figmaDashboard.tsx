import { Dashboard, useGetDashboardModel } from '@sisense/sdk-ui';

const FigmaDashboard = () => {
  const { dashboard } = useGetDashboardModel({
    dashboardOid: '66eb9f425ba5560032cdffc5',
    includeFilters: true,
    includeWidgets: true,
  });

  return (
    <>
      {dashboard && (
        <Dashboard
        defaultDataSource={dashboard.dataSource}
        title={dashboard.title}
        layout={dashboard.layout}
        widgets={dashboard.widgets}
        filters={dashboard.filters}
        widgetFilterOptions={
          dashboard.widgetFilterOptions
        }
        />
      )}
    </>
  );
};

export default FigmaDashboard;
