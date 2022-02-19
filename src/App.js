import React from 'react';

import { DataTable } from './DataTable';
import { SideBar } from './SideBar';
// import { StackedLayout } from './StackedLayout';

// import { GridLists } from './GridLists';
// import { StatsSimple } from './StatsSimple';
// import { StatsWithBrandIcon } from './StatsWithBrandIcon';

const App = () => {
  return (
    <>
      <SideBar />
      <div className='pl-48 pt-16 min-h-screen'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <DataTable />
        </div>
      </div>
      {/* <StackedLayout> */}
      {/* <GridLists /> */}
      {/* <StatsSimple /> */}
      {/* <StatsWithBrandIcon /> */}
      {/* </StackedLayout> */}
    </>
  );
};

export { App };
