import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import Badge from '@material-ui/core/Badge';
import Message from '../../components/Message';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const PatientMessageDropdown = ({ unread, user, className }) => {
  const [items] = useState([{messages: ['heello'], unread: false, type: 'message'}]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const anchorRef = React.useRef(null);

  // const history = useHistory();

  const handleToggle = () => {
    setVisible((visible) => !visible);
  };


  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setVisible(false);
  };
  const loadMessages = async () => {
    setLoading(true);
    setLoading(false);
  };

  const goToChat = item => {
    // history.push(
    //   `/chats?uuid=${item.uuid}&type=${
    //     item.role === 'user' ? 'patient' : 'contacts'
    //   }`
    // );
  };

  useEffect(() => {
    if (visible) {
      loadMessages();
    }
  }, [visible]);

  const menu = (
    <MenuList>
      {!loading && items.length === 0 && (
        <MenuList disabled>
            No new messages
        </MenuList>
      )}
      {!loading &&
        items.length > 0 &&
        items.map((item, index) => (
          <MenuItem key={index} onClick={() => goToChat(item)}>
            <Message
              item={item}
            />
          </MenuItem>
        ))}
    </MenuList>
  );

  return (
    <Grid
      container
      aria-controls={visible ? 'menu-list-grow' : undefined}
      aria-haspopup="true"
      onClick={handleToggle}
      ref={anchorRef}

    >
      <div className="header-notification__trigger">
        <Badge badgeContent={unread} color="secondary">
          <MessageOutlinedIcon className={className} />
        </Badge>
      </div>
      <Popper open={visible} anchorEl={anchorRef.current}  role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin:  'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>

                {menu}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Grid>
  );
};

PatientMessageDropdown.propTypes = {
  unread: PropTypes.number,
  user: PropTypes.object
};

const mapStatesToProps = state => {
  return {
    unread: 5
  };
};

export default connect(mapStatesToProps)(PatientMessageDropdown);
