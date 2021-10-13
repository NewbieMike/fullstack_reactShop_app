import React from 'react';
import PropTypes from 'prop-types';


import { getAll, getOne, fetchOne } from '../../../redux/itemsRedux';
import { connect } from 'react-redux';

import styles from './Item.module.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


class Component extends React.Component {
  componentDidMount() {
    const { fetchItem } = this.props;
    fetchItem();
  }
  
  render(){
    const { item } = this.props;
    console.log(item);
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
  }
}

Component.propTypes = {
  children: PropTypes.node,
  item: PropTypes.node,
  className: PropTypes.string,
  fetchItem: PropTypes.node,
};

const mapStateToProps = (state, props) => ({
  items: getAll(state),
  item: getOne(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchItem: () => dispatch(fetchOne(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Item,
  Component as ItemComponent,
};
