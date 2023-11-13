// Remove this line from dashboard.jsx

import React from 'react';
import Dashboard from '../src/component/Dashboard';
import AddNewPost from '../src/component/AddNewPost';
import GetPost from '../src/component/GetPost';

function DashboardPage({ pageProps }) {
  return (
    <>
      <Dashboard />
      <AddNewPost />
      <GetPost />
    </>
  );
}

export default DashboardPage;
