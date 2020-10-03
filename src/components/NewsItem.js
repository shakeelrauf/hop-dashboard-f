/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
};
let NewsItem = ({ article }) => (
  article
    ? <article style={articleStyle} >
      <div>
        <h1>{article.title}</h1>
        <img style={imgStyle} src={article.urlToImage} alt="" />
        <h4>{article.description}</h4>
        <a href={article.url} target="_blank">READ MORE</a>
      </div>
    </article>
    : null
);

NewsItem.propTypes = {
  article: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    article: state.test.news
  };
};
NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
