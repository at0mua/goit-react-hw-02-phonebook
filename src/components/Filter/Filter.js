import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhonebookActions from '../../redux/Phonebook/PnhonebookActions';
import PhonebookSelectors from '../../redux/Phonebook/PhonebookSelectors';

import s from './Filter.module.scss';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label className={s.filter}>
        Find contacts by name
        <input
          className={s.filter_input}
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
          placeholder="Enter name"
        />
      </label>
    </div>
  );
};

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    value: PhonebookSelectors.getFilter(state),
  };
};

const mapDispatchToProps = {
  onChangeFilter: PhonebookActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
