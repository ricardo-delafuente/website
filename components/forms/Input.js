import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, field, form: { touched, errors }, ...props }) => {
  return (
    <div className="form-group col">
      <label className="form-label">{label}</label>
      <input className="form-field" type={type} {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="form-error">{errors[field.name]}</div>
      )}

      <style jsx>
        {`
          input:focus {
            border-color: #5daec3;
          }
        `}
      </style>
    </div>
  );
};

Input.propTypes = {
  field: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.shape({
    touched: PropTypes.boolean,
    errors: PropTypes.object
  })
};

export default Input;
