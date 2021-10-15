import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';


const Contact = ({className}) => (
  <div className={clsx(className, styles.root)} id='Contacts'>
    <h2 className={styles.title}>Contact</h2>
  </div>
);

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


export default Contact;
