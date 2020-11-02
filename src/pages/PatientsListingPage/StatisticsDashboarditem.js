import React from 'react';
import { Typography, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const StatisticItem = ({ label, value, desc, link, onClick }) => {
  // const handleClick = () => {
  //   if (onClick) {
  //     onClick();
  //   } else if (link) {
  //   }
  // };

  return (
    <Grid style={{padding: '5px'}}>
      <Card className="statistic-desc-item" style={{width: '100%',padding: '22px'}}>
        <Grid container>
          <Grid item xs={12} sm={12} md={9} >
            <Typography variant="h4" style={{ fontWeight: 'normal', fontSize: '24px' }}>
              {label}
            </Typography>
            <Typography style={{fontSize: '14px', marginTop: '16px'}}>{desc}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} >
            <Typography variant="h3" style={{ marginBottom: 0,  fontSize: '36px', textAlign: 'right', fontWeight: 'bold' }}>
              {value}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

StatisticItem.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
  value: PropTypes.number
};

export default StatisticItem;
