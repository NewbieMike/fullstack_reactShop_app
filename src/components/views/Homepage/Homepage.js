import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getAll } from '../../../redux/itemsRedux';
import { connect } from 'react-redux';

import styles from './Homepage.module.scss';




const Component = ({ className, children, items }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.main_background}>
      <h1>romountains</h1>
      <h2>with love to mountains</h2>
    </div>
    <div className={styles.slogan}>Magic moments required best quility </div>
    <div className={styles.products_container}>
      {items.map((item) => (
        <Card className={styles.card} key={item.id}>
          <CardActionArea href={`/items/${item.id}`}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={item.image}
              title="Contemplative Reptile"
              className={styles.card_img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={styles.card_btns}>
            <Button size="small" color="primary">
              Add to cart
            </Button>
            <Button size="small" color="primary">
              Price: {item.price}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.node,
};

const mapStateToProps = (state, props) => ({
  items: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
