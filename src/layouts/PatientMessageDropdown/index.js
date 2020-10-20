import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Empty, Menu, Dropdown } from 'antd';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import Badge from '@material-ui/core/Badge';
import Message from '../../components/Message';

const PatientMessageDropdown = ({ unread, user, className }) => {
  const [items] = useState([{messages: ['heello'], unread: false, type: 'message'}]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const loadMessages = async () => {
    setLoading(true);
    setLoading(false);
  };

  const goToChat = item => {
    history.push(
      `/chats?uuid=${item.uuid}&type=${
        item.role === 'user' ? 'patient' : 'contacts'
      }`
    );
  };

  useEffect(() => {
    if (visible) {
      loadMessages();
    }
  }, [visible]);

  const menu = (
    <Menu className="layout-header-nav__menu">
      {!loading && items.length === 0 && (
        <Menu.Item disabled>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No new messages"
          />
        </Menu.Item>
      )}
      {!loading &&
        items.length > 0 &&
        items.map((item, index) => (
          <Menu.Item key={index} onClick={() => goToChat(item)}>
            <Message
              message={{
                ...item.messages[0],
                sender: item
              }}
              unreadCount={item.unread}
              user={user}
              compact
            />
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      placement="bottomRight"
      overlayStyle={{zIndex: 999999999}}
      trigger={['click']}
      onVisibleChange={setVisible}
      visible={visible}
    >
      <div className="header-notification__trigger">
        <Badge badgeContent={unread} color="secondary">
          <MessageOutlinedIcon className={className} />
        </Badge>
      </div>
    </Dropdown>
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
