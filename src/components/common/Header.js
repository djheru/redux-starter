import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container-fluid">

        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">React-Redux Boilerplate</Link>
        </div>

        <div id="navbar" className="collapse navbar-collapse">

          {/*<NavDrop />*/}

          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
