import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';

export default role => Component => {
  class withAuth extends React.Component {
    static async getInitialProps(args) {
      const pageProps =
        (await Component.getInitialProps) &&
        (await Component.getInitialProps(args));
      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated, user } = this.props.auth;
      const userRole = user && user[`${process.env.NAMESPACE}/role`];
      let isAuthorized = false; /* Default to false */

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <Layout {...this.props.auth}>
            <div className="container">
              <h1 className="center">Please log in to access this page.</h1>
            </div>
          </Layout>
        );
      } else if (!isAuthorized) {
        return (
          <Layout {...this.props.auth}>
            <div className="container">
              <h1 className="center">Unauthorized access to this page.</h1>
            </div>
          </Layout>
        );
      } else {
        return <Component {...this.props} />;
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  }

  withAuth.propTypes = {
    auth: {
      user: PropTypes.object,
      isAuthenticated: PropTypes.bool
    }
  };

  return withAuth;
};
