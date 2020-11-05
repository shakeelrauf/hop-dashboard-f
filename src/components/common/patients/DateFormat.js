import React from 'react';
import PropTypes from 'prop-types';
import  moment from 'moment';

function DateFormat({ value }) {
  const [date, setDate] = React.useState('');
  React.useEffect(() =>{
    let milliseconds = value * 1000;
    let dateObject = new Date(milliseconds);
    setDate(dateObject);
  }, [value]);
  return (
    <>
      {date && moment(date).format('MMMM DD, YYYY')}
    </>
  );
}

DateFormat.propTypes = {
  value: PropTypes.number,
};

export default DateFormat;
