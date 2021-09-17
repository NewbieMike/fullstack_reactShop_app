import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Header</h2>
    <div className={styles.links_container}>
      <HashLink to='/#Home' smooth>Home</HashLink>
      <HashLink to='/#Shop' smooth>Shop</HashLink>
      <HashLink to='/#About' smooth>About</HashLink>
      {/* <ScrollLink to='/'>Link</ScrollLink> */}
    </div>
    <div className={styles.cart}>
      <a href='/cart'>Cart <ShoppingCartIcon /></a>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
