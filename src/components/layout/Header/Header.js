import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Header</h2>
    <div className={styles.links_container}>
      <a href='/'>Link</a>
      <a href='/'>Link</a>
      <a href='/'>Link</a>
      <a href='/'>Link</a>
    </div>
    <div className={styles.cart}>
      <ShoppingCartIcon />
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
