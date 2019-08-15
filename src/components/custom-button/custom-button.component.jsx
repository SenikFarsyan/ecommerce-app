import React from 'react';

//styles
import './custom-button.styles.scss';

const CostomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      }  custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CostomButton;
