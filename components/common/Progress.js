import React from 'react';
import PropTypes from 'prop-types';

function Progress(props) {
  const { label, value } = props;

  return (
    <div>
      <span className="label uppercase">{label}</span>
      <div className="progress">
        <span className="progress-bar" style={{ width: value }} />
      </div>

      <style jsx>{`
        .label {
          color: #555555;
          display: inline-block;
          font-size: 0.8rem;
          font-weight: bold;
          margin: 1.5rem 0 0.5rem;
        }
        .progress {
          background-color: #f0f0f0;
          border-radius: 0.25rem;
          box-shadow: inset 1px 1px 3px rgba(102, 119, 136, 0.25);
          height: 1.25rem;
          padding: 0.25rem;
        }
        .progress > span {
          background-color: #5daec3;
          border-radius: 0.1rem;
          box-shadow: inset 1px 1px 3px rgba(102, 119, 136, 0.25);
          display: block;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

Progress.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Progress;
