import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCartItems } from '../../../redux/cartRedux.js';

import styles from './Header.module.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Component = ({ className, cartItems }) => {
  console.log(cartItems);
  const [cartQty, setCartQty] = useState(0);
  useEffect(() => {
    let count = 0;
    cartItems.forEach(item => {
      count += parseInt(item.quantity);
    });
    setCartQty(count);
  }, [cartQty, cartItems]);

  return (
    <div className={clsx(className, styles.root)}>
      <h2>Header</h2>
      <div className={styles.links_container}>
        <HashLink to='/#Home' smooth>Home</HashLink>
        <HashLink to='/#Shop' smooth>Shop</HashLink>
        <HashLink to='/#About' smooth>About</HashLink>
        {/* <ScrollLink to='/'>Link</ScrollLink> */}
      </div>
      <div className={styles.cart}>
        <a href='/cart'>Cart <ShoppingCartIcon /> {cartQty}</a>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cartItems: PropTypes.node,
};

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
