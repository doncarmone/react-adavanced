import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MyCheckbox, MyTextInput, MySelect } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Forkmik Page</h1>
      <hr />
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe tener al menos 2 chars o mas')
            .max(15, 'Debe tener 15 chars o menos')
            .required('Name Requerido'),
          email: Yup.string()
            .email('Debe ser un email valido')
            .max(255)
            .required('Email Requerido'),
          password1: Yup.string()
            .min(6, 'Debe tener al menos 6 chars')
            .label('Password')
            .required(),
          password2: Yup.string()
            .label('Confirm password')
            .required()
            .oneOf([Yup.ref('password1')], 'Passwords must match'),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput label='Name' name='name' placeholder='Name' />
            <MyTextInput
              label='Email Adress'
              name='email'
              placeholder='example@example.com'
              type='email'
            />
            <MyTextInput label='Password' name='password1' type='password' />
            <MyTextInput
              label='Confirm Password'
              name='password2'
              type='password'
            />
            <button type='submit'>Create</button>
            <button onClick={handleReset}>Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
