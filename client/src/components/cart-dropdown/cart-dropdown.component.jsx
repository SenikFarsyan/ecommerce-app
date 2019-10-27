import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

//actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//components
import CartItem from '../cart-item/cart-item.component';

//styled components
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CustomButtonContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CustomButtonContainer
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButtonContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCartHidden }
  )(CartDropdown)
);
