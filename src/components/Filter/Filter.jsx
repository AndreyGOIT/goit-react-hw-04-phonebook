import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filterBlock}>
      <p className={styles.filterTitle}>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
