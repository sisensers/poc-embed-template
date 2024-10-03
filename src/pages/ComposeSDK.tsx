import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Dashboard, dashboardModelTranslator, useGetDashboardModel } from '@sisense/sdk-ui';
import { useDashboard } from '../DashboardContext';

const CodeExample = () => {
  const { dashboardID } = useDashboard();

  const { dashboard, isLoading, error } = useGetDashboardModel({
    dashboardOid: dashboardID, 
    includeFilters: true,
    includeWidgets: true,
  });

  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleFiltersPanel = () => {
    setFiltersVisible((prev) => !prev);
  };

  if (isLoading) {
    return <div>Loading dashboard...</div>;
  }

  if (error) {
    return <div>Error loading dashboard: {error.message}</div>;
  }

  if (!dashboard) {
    return null;
  }

  const { title, widgets, layoutOptions, filters, styleOptions, widgetsOptions } =
    dashboardModelTranslator.toDashboardProps(dashboard);

  return (
    <>
      <Button
        onClick={toggleFiltersPanel}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
      >
        {filtersVisible ? 'Hide Filters' : 'Show Filters'}
      </Button>

      <Dashboard
        title={title}
        layoutOptions={layoutOptions}
        config={{
          toolbar: { isVisible: false },
          filtersPanel: { isVisible: filtersVisible }, 
        }}
        widgets={widgets}
        filters={filters}
        styleOptions={styleOptions}
        widgetsOptions={widgetsOptions}
      />
    </>
  );
};

export default CodeExample;
