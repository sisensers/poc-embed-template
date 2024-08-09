import React from 'react';
import SisenseDashboardEmbed from 'sisense-embedsdk-react';
import { useDashboard } from '../DashboardContext';

function EmbedSDK() {
  const { dashboardID } = useDashboard();

  if (!dashboardID) {
    return <div>Please select a dashboard to view.</div>;
  }

  return (
    <SisenseDashboardEmbed
      sisenseUrl={"https://YOURURL.sisensepoc.com"}
      dashboardId={dashboardID}
      frameHeight="1900px"
    />
  );
}

export default EmbedSDK;
