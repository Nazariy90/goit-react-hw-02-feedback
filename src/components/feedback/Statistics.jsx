import React from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.statisticsList}>
    <li className={css.statisticsItem}>
      Good: <span className={css.statisticsItemValue}>{good}</span>
    </li>
    <li className={css.statisticsItem}>
      Neutral: <span className={css.statisticsItemValue}>{neutral}</span>
    </li>
    <li className={css.statisticsItem}>
      Bad: <span className={css.statisticsItemValue}>{bad}</span>
    </li>
    <li className={css.statisticsItem}>
      Total: <span className={css.statisticsItemValue}>{total}</span>
    </li>
    <li className={css.statisticsItem}>
      Positive feedback:{' '}
      <span className={css.statisticsItemValue}>{positivePercentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
