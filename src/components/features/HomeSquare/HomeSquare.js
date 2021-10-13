import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

import styles from './HomeSquare.module.scss';

const Component = (props) => {

  return (
    <HashLink className={styles.box} to={`${props.link}`} style={{top: props.top, left: props.left}}>
      <h4>{props.title}</h4>
    </HashLink>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  top: PropTypes.node,
  left: PropTypes.node,
};



export {
  Component as HomeSquare,
  //Container as Footer,
  Component as HomeSquareComponent,
};
