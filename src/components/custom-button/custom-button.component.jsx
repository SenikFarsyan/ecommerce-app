import React from 'react';

//styles
import './custom-button.styles.scss';

const CostomButton = ({ children, ...otherProps }) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  );
};

export default CostomButton;
