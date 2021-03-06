import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { getAll, fetchItems } from '../../../redux/itemsRedux';
import { connect } from 'react-redux';

import styles from './Homepage.module.scss';

import About from './About/About.js';
import Contact from './Contact/Contact';



const Component = ({ className, items, fetchAllItems }) => {
  // useEffect(() => {
  //   fetchAllItems();
  // }, []);
  return (
    <div className={clsx(className, styles.root)} id='Home'>
      <div className={styles.main_background}>
        <h1>romountains</h1>
        <h2>with love to mountains</h2>
        <HashLink className={clsx(className, styles.box)} to='/#Shop' smooth>
          <h4>Shop</h4>
        </HashLink>
        <HashLink className={clsx(className, styles.box2)} to='/#About' smooth>
          <h4>About</h4>
        </HashLink>
        <HashLink className={clsx(className, styles.box3)} to='/#Contact' smooth>
          <h4>Contact</h4>
        </HashLink>
      </div>
      <div className={styles.slogan} >Magic moments required best quility </div>
      <div className={styles.products_container} id='Shop'>
        {items.map((item) => (
          <Card className={styles.card} key={item._id}>
            <CardActionArea href={`/items/${item._id}`}>
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
                Add to cart <ShoppingCartIcon />
              </Button>
              <Button size="small" color="primary">
                Price: {item.price}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <About />
      <Contact />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.node,
  fetchAllItems: PropTypes.node,
};

const mapStateToProps = (state) => ({
  items: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => dispatch(fetchItems()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
