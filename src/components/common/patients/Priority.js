import React from 'react';
import PropTypes from 'prop-types';
import TagButton  from '../../Buttons/TagButton';

export const STATUS = {
  low: {
    tooltip: 'Created, first login successful and onboarding complete',
    color: '#f82712',
    backgroundColor: '#ffeae7'
  },
  medium: {
    tooltip: 'Created and active',
    color: '#1fc826',
    backgroundColor: '#e9ffea'
  }
};


function Priority({ value, type }) {

  const STATUS_MAP = STATUS;
  const status = STATUS_MAP[value] || {};
  return (
    <>
      <TagButton color={status.color} background={status.backgroundColor}>{value}</TagButton>
    </>
  );
}

Priority.propTypes = {
  value: PropTypes.string,
};

export default Priority;
