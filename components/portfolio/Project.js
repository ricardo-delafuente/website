import React from 'react';
import PropTypes from 'prop-types';

export default function Project(props) {
  const { title, description, thumbnail, url } = props;

  return (
    <article className="col col-3">
      <img src={thumbnail} />
      <div className="overlay center">
        <p className="description">{description}</p>
        <a href={url} className="btn">
          Visit Website &rarr;
        </a>
      </div>
        <h3 className="title">{title}</h3>

      <style jsx>{`
        article {
          border-radius: 0.5rem;
          box-shadow: 3px 3px 10px rgba(102, 119, 136, 0.3);
          margin: 1.5rem;
          overflow: hidden;
          padding: 0;
          position: relative;
          text-align: center;
        }
        img {
          display: block;
          width: 100%;
        }
        h4 {
          margin: 0;
          text-transform: uppercase;
        }
        .title {
          text-transform: uppercase;
        }
        .overlay {
          align-items: center;
          background: #171f29;
          bottom: 0;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          left: 0;
          opacity: 0;
          padding: 1rem 1.5rem;
          position: absolute;
          right: 0;
          transition: all 0.75s;
          top: 0;
          visibility: hidden;
        }
        article:hover .overlay {
          opacity: 1;
          visibility: visible;
        }
        .btn {
          border: 2px solid #5daec3;
          border-radius: 1.5rem;
          color: white;
          font-size: 1rem;
        }
        .btn:hover {
          background: #5daec3;
        }
      `}</style>
    </article>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string
};
