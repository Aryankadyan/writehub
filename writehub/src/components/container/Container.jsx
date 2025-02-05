import React from 'react'
import PropTypes from 'prop-types';

function Container({children}) {
  return <div className='w-full max-w-6xl mx-auto px-5'>{children}</div>; 
}
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container


