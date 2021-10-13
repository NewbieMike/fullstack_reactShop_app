import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCartItems } from '../../../redux/cartRedux.js';

import styles from './Cart.module.scss';

const Component = ({ className, cartItems }) => {
  const [cartQnty, setCartQnty] = useState(0);
  const [subtotalPrice, setSubtotalPrice] = useState(0);

  useEffect(() => {
    let count = 0;
    let price = 0;
    cartItems.forEach(item => {
      count += parseInt(item.quantity);
      price += parseInt(item.priceSingle) * parseInt(item.quantity);
    });
    setCartQnty(count);
    setSubtotalPrice(price);
  }, [cartItems, cartQnty]);

  const delivery = 0;
  const totalPrice = subtotalPrice + delivery;

  return (
    <div className={clsx(className, styles.root)}>
      <h2>Cart</h2>
      {cartItems.map((cartItem, index) => (
        <div key={index} {...cartItem} />
      ))}
      <div>
        {subtotalPrice}
        {delivery}
        {totalPrice}
      </div>
    </div>
  );
};

Component.propTypes = {
  cartItems: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
