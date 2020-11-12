import React from 'react';
import { Typography, Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const StatisticItem = ({ label, desc, link, onClick,meta, key, item }) => {

  React.useEffect(() => {
  });

  return (
    <Grid style={{padding: '5px'}}>
      <Card className="statistic-desc-item" style={{width: '100%',padding: '22px', minHeight: '160px'}}>
        <Grid container>
          <Grid item xs={12} sm={12} md={9} >
            <Typography variant="h4" style={{ color: '#1e2633', fontWeight: 'normal', fontSize: '24px' }}>
              {label}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} >
            <Typography variant="h3" style={{ color: '#1e2633', marginBottom: 0,  fontSize: '36px', textAlign: 'right', fontWeight: 'bold' }}>
              {meta && meta[item.key] && meta[item.key].total}
            </Typography>
          </Grid>
          <Typography style={{color: '#636b75',fontSize: '14px', marginTop: '16px'}}>{desc}</Typography>
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
};

export default StatisticItem;
