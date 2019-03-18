import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Meta from '../common/Meta';
import Footer from '../common/Footer';

const Layout = props => {
  const { children, isAuthenticated } = props;

  return (
    <div className={'wrapper'}>
      {/* Global styles */}
      <Meta />

      <Header isAuthenticated={isAuthenticated} />
      <div className="content">{children}</div>
      <Footer />

      {/* Sticky footer */}
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .content {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  isAuthenticated: PropTypes.bool.isRequired
};

export default Layout;
