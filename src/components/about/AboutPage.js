import React from 'react';
import {Link, IndexLink} from 'react-router';

class AboutPage extends React.Component{
  render() {
    return (
      <div className="jumbotron">
        <h1>About Us</h1>
        <p>React, Redux, React Router in ES6 for ultra-responsive web apps.</p>
        <IndexLink to="/" activeClassName="active" className="btn btn-primary btn-lg">Get Started!</IndexLink>
      </div>
    );
  }
}

export default AboutPage;
