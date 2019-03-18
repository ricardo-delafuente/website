import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { submitForm } from '../../actions';

import Input from './Input';
import TextArea from './TextArea';

const validation = values => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
};

class Contact extends Component {
  constructor() {
    super();

    this.state = { error: undefined };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values, { setSubmitting }) {
    submitForm(values)
      .then(() => {
        setSubmitting(false);
        alert('Thanks! Your message has been sent successfully.');
      })
      .catch(error => {
        setSubmitting(false);
        alert('Something went wrong :( Please try again later.');
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={{
            email: '',
            message: '',
            name: ''
          }}
          validate={validation}
          onSubmit={this.onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row">
                <Field
                  type="text"
                  name="name"
                  label="Name *"
                  component={Input}
                />
                <Field
                  type="email"
                  name="email"
                  label="Email *"
                  component={Input}
                />
              </div>
              <div className="row">
                <Field name="message" label="Message *" component={TextArea} />
              </div>

              <button className="btn" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>

        <style jsx>{`
          .btn {
            color: #5daec3;
            border: 1px solid #5daec3;
            float: right;
          }
          .btn:hover {
            color: white;
            background: #5daec3;
          }
          .btn:disabled,
          .btn:disabled:hover {
            color: #eeeeee;
            border-color: #eeeeee;
            cursor: initial;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Contact;
