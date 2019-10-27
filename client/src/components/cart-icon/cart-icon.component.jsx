import React from 'react';
import { connect } from 'react-redux';

//actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

//styled components
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
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
