import React from 'react';
import SisenseDashboardEmbed from 'sisense-embedsdk-react';
import { useDashboard } from '../DashboardContext';

function EmbedSDK() {
  const { dashboardID } = useDashboard();
  const sisenseUrl = process.env.REACT_APP_SISENSE_URL || '';

  if (!dashboardID) {
    return <div>Please select a dashboard to view.</div>;
  }

  return (
    <SisenseDashboardEmbed
      sisenseUrl={sisenseUrl}
      dashboardId={dashboardID}
      frameHeight="1900px"
    />
  );
}

export default EmbedSDK;
