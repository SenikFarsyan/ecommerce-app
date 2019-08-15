import React from 'react';
import { connect } from 'react-redux';

//actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

//styles
import './cart-icon.styles.scss';

//iconsrs
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToComponent = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
};

export default connect(
  mapStateToComponent,
  mapDispatchToProps
)(CartIcon);
