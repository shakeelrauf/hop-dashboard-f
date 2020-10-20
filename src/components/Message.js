import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FlagOutlined } from '@material-ui/icons';
import {
  Comment,
  Avatar,
  Badge,
  Tooltip,
  message as msgNotify,
  Modal
} from 'antd';
import moment from 'moment';
import { Player } from 'video-react';
import { Linkify } from './common';

const getTimestamp = message => {
  return (new Date());
};
  
class Message extends Component {
    
  state = {
    flagged: false
  };

  componentDidMount() {
    const { message, markAsRead, user } = this.props;
    if (!message.read && markAsRead && message.sender.uuid !== user.uuid) {
      this.timeout = setTimeout(() => {
        markAsRead(message.uuid);
      }, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getType(message) {
    let { type } = message;

    if (
      (message.type === 'message' ||
        message.type === 'text' ||
        message.type === 'communication' ||
        message.type === 'group') &&
      message.file &&
      (message.file.object || message.object)
    ) {
      type = message.file.object || message.object;
    }

    return type;
  }

  getActions() {
    const { message, currentContact, user } = this.props;
    if (user.role !== 'administrator') {
      return [];
    }

    if (currentContact.type.toLowerCase() === 'group') {
      return [
        <Tooltip title="Flag">
          <FlagOutlined
            onClick={() => this.flagMessage(message, currentContact)}
          />
        </Tooltip>
      ];
    }

    return [];
  }

  flagMessage = (message, currentContact) => {
    Modal.confirm({
      title: 'Are you sure you want to flag this message?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        // const func = message.type === 'journal' ? 'flagJournal' : 'flagMessage';
        const resp = {ok: true};
        if (!resp.ok) {
          msgNotify.error(resp.data.message || 'There was problem flagging');
        } else {
          msgNotify.success('The message was flagged successfully');
          this.setState({ flagged: true });
        }
      }
    });
  };

  renderContent(message) {
    const type = this.getType(message);

    if (type === 'image') {
      return (
        <div className="msg">
          <img className="msg-image" src={message.file.link} alt="message" />
          {message.message && (
            <p>
              <Linkify>{message.message}</Linkify>
            </p>
          )}
        </div>
      );
    }

    if (type === 'video') {
      return (
        <div className="msg">
          <div className="msg-image">
            <Player>
              <source src={message.file.link} />
            </Player>
          </div>
          {message.message && (
            <p>
              <Linkify>{message.message}</Linkify>
            </p>
          )}
        </div>
      );
    }

    if (type === 'journal') {
      return (
        <div>
          <p>
            <b>{`Subject: ${message.subject}`}</b>
          </p>
          <p>
            <Linkify>{message.message}</Linkify>
          </p>
        </div>
      );
    }

    return (
      <p>
        <Linkify>{message.message}</Linkify>
      </p>
    );
  }

  renderDateTime(message) {
    const time = moment(getTimestamp(message), 'X');
    return (
      <Tooltip title={time.format('MM/DD/YYYY h:mm A')}>
        <span>{time.fromNow()}</span>
      </Tooltip>
    );
  }

  render() {
    const { message, compact, unreadCount } = this.props;
    const { flagged } = this.state;

    if (flagged) {
      return null;
    }

    return (
      <Comment
        className="chat-message"
        author={<a>{message.sender.name}</a>}
        avatar={
          <Badge count={unreadCount}>
            <Avatar src={message.sender.avatar} alt={message.name} />
          </Badge>
        }
        content={this.renderContent(message)}
        datetime={this.renderDateTime(message)}
        actions={!compact && this.getActions()}
      />
    );
  }
}

Message.propTypes = {
  message: PropTypes.object,
  currentContact: PropTypes.object,
  user: PropTypes.object,
  compact: PropTypes.bool,
  markAsRead: PropTypes.func
};

const mapStatesToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStatesToProps)(Message);
