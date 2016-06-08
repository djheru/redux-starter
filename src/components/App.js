import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Header from './common/Header';
import LoadingDots from './common/LoadingDots';

class App extends React.Component{
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.loading && <LoadingDots />}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxStatus > 0
  };
}
export default connect(mapStateToProps)(App);
