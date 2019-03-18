import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, field, form: { touched, errors }, ...props }) => {
  return (
    <div className="form-group col">
      <label className="form-label">{label}</label>
      <textarea className="form-field" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="form-error">{errors[field.name]}</div>
      )}
      <style jsx>
        {`
          textarea {
            height: 10rem;
            resize: none;
          }
          textarea:focus {
            border-color: #5daec3;
          }
        `}
      </style>
    </div>
  );
};

TextArea.propTypes = {
  field: PropTypes.object,
  label: PropTypes.string,
  form: PropTypes.shape({
    touched: PropTypes.boolean,
    errors: PropTypes.object
  })
};

export default TextArea;
