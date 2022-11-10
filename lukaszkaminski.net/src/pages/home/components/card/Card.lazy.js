import React, { lazy, Suspense } from 'react';
import PropTypes from "prop-types";

const LazyCard = lazy(() => import('./Card'));

const Card = ({title, code}) => (
  <Suspense fallback={null}>
    <LazyCard title={title} code={code}/>
  </Suspense>
);

Card.propTypes = {
  title: PropTypes.string,
  code: PropTypes.string
};

Card.defaultProps = {
  title: "Blank Title",
  code: ""
};

export default Card;
