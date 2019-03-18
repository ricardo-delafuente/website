import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';
import { withRouter } from 'next/router';
import auth0Client from '../services/auth';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push('/');
  }
  render() {
    return (
      <Layout {...this.props.auth}>
        <div className="center">
          <span>Logging in...</span>
        </div>
      </Layout>
    );
  }
}

Callback.propTypes = {
  auth: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default withRouter(Callback);
