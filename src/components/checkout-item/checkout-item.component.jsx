import React from 'react';

//styles
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <soan className='orice'>{price}</soan>
      <div className='remove-button'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
