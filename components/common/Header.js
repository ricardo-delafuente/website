import React, { Component } from 'react';
import PropTypes from 'prop-types';
import auth0Client from '../../services/auth';
import Link from 'next/link';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.close = this.close.bind(this);
  }

  handleToggle() {
    // Toggle the display of mobile navigation
    this.setState({ isOpen: !this.state.isOpen });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const statusClass = isOpen ? 'nav-open' : 'nav-close';
    const { isAuthenticated } = this.props;

    return (
      <header className="container">
        <Link href="/">
          <a className="brand">
            Ricardo <span className="accent">De la Fuente</span>
          </a>
        </Link>

        {/* Nav Toggle */}
        <button className="btn toggle" onClick={this.handleToggle}>
          <i className="fas fa-bars" />
        </button>

        {/*  Mobile Nav */}
        <div className={`mobile-nav ${statusClass}`}>
          <Link href="#about">
            <a className="nav-link" onClick={this.close}>
              About
            </a>
          </Link>
          <Link href="#work">
            <a className="nav-link" onClick={this.close}>
              Work
            </a>
          </Link>
          <Link href="#contact">
            <a className="nav-link" onClick={this.close}>
              Contact
            </a>
          </Link>
          {!isAuthenticated && (
            <span onClick={auth0Client.login} className="nav-link">
              Log in
            </span>
          )}
          {isAuthenticated && (
            <span onClick={auth0Client.logout} className="nav-link">
              Log out
            </span>
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          <Link href="#about">
            <a className="nav-link">About</a>
          </Link>
          <Link href="#work">
            <a className="nav-link">Work</a>
          </Link>
          <Link href="#contact">
            <a className="nav-link">Contact</a>
          </Link>
          <span className="divider" />
          {!isAuthenticated && (
            <span onClick={auth0Client.login} className="nav-link">
              Log in <i className="fas fa-sign-in-alt" />
            </span>
          )}
          {isAuthenticated && (
            <span onClick={auth0Client.logout} className="nav-link">
              Log out <i className="fas fa-sign-out-alt" />
            </span>
          )}
        </nav>

        <style jsx>{`
          header {
            align-items: center;
            display: flex;
            font-size: 1.15rem;
            height: 5rem;
            justify-content: space-between;
            margin-bottom: 3rem;
            text-transform: uppercase;
          }
          .brand {
            color: #667788;
            font-weight: 500;
          }
          .toggle {
            border: none;
            font-size: 1.5rem;
          }
          .toggle:hover {
            color: #ff8a00;
          }
          .nav {
            display: none;
          }
          .nav-link {
            color: #667788;
            display: inline-block;
            padding: 0.5rem 0.75rem;
            cursor: pointer;
          }
          .nav-link:hover {
            color: #ff8a00;
          }
          .nav > *:not(:last-child) {
            margin-right: 0.25rem;
          }
          /* Responsive */
          @media (max-width: 767px) {
            .mobile-nav {
              align-items: center;
              background: #ffffff;
              border-bottom: 1px dotted #eaeaea;
              border-top: 1px dotted #eaeaea;
              display: flex;
              flex-direction: column;
              left: 0;
              padding: 2.5rem 0;
              position: absolute;
              right: 0;
              top: 5rem;
              transition: all 0.25s;
              z-index: 99;
            }
            .nav-close {
              opacity: 0;
              transform: translateY(-1rem);
              visibility: hidden;
            }
            .nav-open {
              opacity: 1;
              transform: translateY(0);
              visibility: visible;
            }
          }
          @media (min-width: 768px) {
            .toggle {
              display: none;
            }
            .mobile-nav {
              display: none;
            }
            .nav {
              display: block;
            }
          }
        `}</style>
      </header>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default Header;
