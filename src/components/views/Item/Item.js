import React from 'react';
import PropTypes from 'prop-types';


import { getOne } from '../../../redux/itemsRedux';
import { connect } from 'react-redux';

import styles from './Item.module.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Component = ({ className, item }) => {

  // console.log(item);
  return (
    <div className={styles.item_container}>
      <h3>{item.title}</h3>
      <div className={styles.small_container}>
        <img src={item.image} alt={item.title}/>
        <div>
          <p>{item.content}</p>
          <p>Price: {item.price}</p>
          <a href='/'>Add to cart <ShoppingCartIcon /></a>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  item: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  item: getOne(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Item,
  Container as Item,
  Component as ItemComponent,
};
