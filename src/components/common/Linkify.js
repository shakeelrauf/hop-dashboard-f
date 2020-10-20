import React from 'react';
import ReactLinkify from 'react-linkify';
import Linkifyit from 'linkify-it';
import tlds from 'tlds';

const linkify = new Linkifyit();
linkify.tlds(tlds);
linkify.set({ fuzzyLink: false });

const match = text => linkify.match(text);

function Linkify({ ...props }) {
  return <ReactLinkify matchDecorator={match} {...props} />;
}
export default Linkify;
