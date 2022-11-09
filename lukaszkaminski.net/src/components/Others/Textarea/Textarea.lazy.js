import React, { lazy, Suspense } from 'react';

const LazyTextarea = lazy(() => import('./Textarea'));

const Textarea = props => (
  <Suspense fallback={null}>
    <LazyTextarea {...props} />
  </Suspense>
);

export default Textarea;
