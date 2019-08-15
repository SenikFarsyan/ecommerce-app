import React from 'react';
import { connect } from 'react-redux';

//actions
import { addItem } from '../../redux/cart/cart.actions';

//components
import CustomButton from '../custom-button/custom-button.component';

//styles
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const handleClick = () => addItem(item);
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={handleClick}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
