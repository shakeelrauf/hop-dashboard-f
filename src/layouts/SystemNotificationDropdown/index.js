import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const SystemNotificationDropdown = ({ unread, className }) => {
  return (
    <Badge badgeContent={unread} color="primary" >
      <NotificationsOutlinedIcon className={className} />
    </Badge>
  );
};

SystemNotificationDropdown.propTypes = {
  unread: PropTypes.number
};

const mapStatesToProps = state => {
  return {
    unread: 5
  };
};

export default connect(mapStatesToProps)(SystemNotificationDropdown);
