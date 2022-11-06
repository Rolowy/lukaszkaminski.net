import React, { lazy, Suspense } from 'react';

const LazyInformationUc = lazy(() => import('./InformationUc'));

const InformationUc = props => (
  <Suspense fallback={<>Loading page..</>}>
    <LazyInformationUc {...props} />
  </Suspense>
);

export default InformationUc;
