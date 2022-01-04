import React from 'react';

import { DataTable } from './DataTable';
import { SideBar } from './SideBar';

const App = () => {
  return (
    <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
      {/* <DataTable /> */}
      <SideBar />
    </div>
  );
};

export { App };
