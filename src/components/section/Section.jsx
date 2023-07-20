import PropTypes from 'prop-types';
import css from './section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2> {children}
    </section>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
};
