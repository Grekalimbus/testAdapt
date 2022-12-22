import React from 'react';
import styles from './index.module.css';

const TestAdapt = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.flexElem}>flex1</div>
      <div className={styles.flexElem}>flex2</div>
      <div className={styles.flexElem}>flex3</div>
    </div>
  );
};

export default TestAdapt;
