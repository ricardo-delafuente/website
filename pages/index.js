import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Typed from 'react-typed';

class Index extends Component {
  constructor(props) {
    super(props);

    this.roles = [
      'Web Developer',
      'Tech Lover',
      'UX|UI Designer',
      'Team Player',
      'Detail Oriented'
    ];
  }
  render() {
    return (
      <Layout>
        <section className="hero container">
          <h1 className="typed uppercase">
            <Typed
              strings={this.roles}
              typeSpeed={75}
              backDelay={1500}
              backSpeed={50}
              smartBackspace={true}
              loop={true}
            />
          </h1>
          <img
            className="hero-img"
            src="/static/img/engineer.png"
            alt="software engineer"
          />
        </section>

        <style jsx>{`
          section {
            margin-bottom: 3rem;
          }
          /* Hero & Welcome */
          .hero {
            padding: 1rem 0;
            text-align: center;
          }
          .typed {
            font-size: 2.5rem;
            font-weight: 400;
            margin: 0 0 4.5rem;
          }
          .hero-img {
            max-width: 30rem;
            width: 75vw;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
