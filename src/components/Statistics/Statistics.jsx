import PropTypes from 'prop-types';

import getRandomHexColor from './getColor';

import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(items => 
  (<li className={styles.item} key={items.id}
    style={{
      backgroundColor: getRandomHexColor()
    }}>
      <span className={styles.label}>{items.label}</span>
      <span className={styles.percentage}>{items.percentage}%</span>
    </li>));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{elements}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  items: []
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })),
  title: PropTypes.string,
}

export default Statistics;

