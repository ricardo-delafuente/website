import React from 'react';
import App, { Container } from 'next/app';
import auth0Client from '../services/auth';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const user = process.browser
      ? await auth0Client.clientAuthentication()
      : await auth0Client.serverAuthentication(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps, auth: { user, isAuthenticated: !!user }
    };
  }

  render() {
    const { Component, pageProps, auth } = this.props;

    return (
      <Container>
        <Component {...pageProps} auth={auth} />
      </Container>
    );
  }
}

export default MyApp;
