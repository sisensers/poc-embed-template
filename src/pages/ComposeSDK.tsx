import React, { useState, useEffect } from 'react';
import { DashboardById } from '@sisense/sdk-ui';
import { useDashboard } from '../DashboardContext';

function ComposeSDK() {
    const { dashboardID } = useDashboard();
  
    if (!dashboardID) {
      return <div>Please select a dashboard to view.</div>;
    }

  return (
    <>
        <DashboardById
          dashboardOid={dashboardID}
        />
    </>
  );
}

export default ComposeSDK;
