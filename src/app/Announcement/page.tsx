import React from 'react';
import Layout from './Layout';
import AnnouncementList from './AnnouncementList';

const App: React.FC = () => {
  return (
    <Layout>
      <AnnouncementList />
    </Layout>
  );
};

export default App;