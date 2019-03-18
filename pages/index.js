import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Typed from 'react-typed';

import Progress from '../components/common/Progress';
import Portfolio from '../components/portfolio/Portfolio';

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

        <section id="about" className="container">
          <h2 className="heading uppercase">
            <span>About</span>
          </h2>

          <div className="row">
            <div className="col">
              <h3>Hello & Welcome!</h3>
              <p>
                My name is Ricardo De la Fuente and I am Web Developer based in
                Tokyo, Japan. I earned my degree in Computer Information Systems
                and my studies centered on web applications development.
              </p>
              <p>
                While away from my computer, I like to travel and spend time
                with my friends and family. I also enjoy learning new languages;
                I speak English & Spanish fluently and am currently studying
                Japanese.
              </p>
            </div>
            <div className="col">
              <Progress label="HTML5" value="90%" />
              <Progress label="JavaScript" value="70%" />
              <Progress label="CSS3" value="80%" />
            </div>
          </div>

          <h3 className="sub-heading center uppercase">Technical Breakdown</h3>

          <div className="row">
            <article className="col skill-group center">
              <img src="../static/img/skill-design.png" />
              <h3>Design</h3>
              <p>
                Keeping up with best practices and latest trends to produce high
                quality, user centered designs.
              </p>
              <h4>Expertise:</h4>
              <p>UX, UI, Web, Mobile, Responsive</p>
              <h4>Software:</h4>
              <p>Photoshop, Illustrator</p>
            </article>

            <article className="col skill-group center">
              <img src="../static/img/skill-dev.png" />
              <h3>Development</h3>
              <p>
                As a developer, I enjoy solving problems and coming up with
                creative solutions.
              </p>
              <h4>Languages:</h4>
              <p>HTML, CSS, SASS, JavaScript, PHP</p>
              <h4>Frameworks:</h4>
              <p>Bootstrap, React, Next, Express, Wordpress</p>
            </article>

            <article className="col skill-group center">
              <img src="../static/img/skill-toolkit.png" />
              <h3>Environment</h3>
              <p>
                Experience working in both Unix/Windows & can quickly adapt to
                new environments.
              </p>
              <h4>Tool Kit:</h4>
              <p>
                VS Code, Git & GitHub, WebPack, Jest, Chrome Developer Tools
              </p>
            </article>
          </div>
        </section>

        <section id="work" className="container">
          <h2 className="heading uppercase">
            <span>My Work</span>
          </h2>
          <Portfolio />
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
          /* Technical Skills */
          .skill-group img {
            margin-bottom: 1rem;
          }
          /* Responsive */
          @media (max-width: 767px) {
            .skill-group {
              border: 1px dotted #eeeeee;
            }
          }
          @media (min-width: 768px) {
            section {
              margin-bottom: 7.5rem;
            }
            .skill-group:not(:last-child) {
              border-right: 1px dotted #eeeeee;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
