import React from "react";
import PropTypes from 'prop-types';

const HeaderStyle = {
  backgroundColor: "{bgColor}",
  color: "{Textcolor}"
};

function Header({ text, bgColor, Textcolor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: Textcolor
  };

  return (
    <header className="container" style={headerStyle}>
      <h3>{text}</h3>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  Textcolor: PropTypes.string
};

Header.defaultProps = {
  text: 'FeedBack App',
  bgColor: 'black',
  Textcolor: 'pink'
};

export default Header;
