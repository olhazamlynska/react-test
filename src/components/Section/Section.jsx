import PropTypes from 'prop-types';
import styles from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section className={title ? styles.bg : styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
