import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';
import Meta from '../common/Meta';
import Footer from '../common/Footer';

const Layout = props => {
  const { children } = props;

  return (
    <div className={'wrapper'}>
      {/* Global styles */}
      <Meta />

      <Header />
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
  children: PropTypes.node
};

export default Layout;
