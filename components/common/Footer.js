import React from 'react';

const Footer = () => {
  return (
    <footer className="container center">
      2019 &copy; Ricardo De la Fuente
      <span className="divider" />
      <a
        href="https://www.vecteezy.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Vectors by Vecteezy.com
      </a>
      <span className="divider" />
      <a
        href="https://github.com/ricardo-delafuente"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-github icon" /> GitHub
      </a>
      
      <style jsx>{`
        footer {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          line-height: 2.5rem;
          padding: 2.5rem;
        }
        .icon {
          margin-right: 0.3rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
