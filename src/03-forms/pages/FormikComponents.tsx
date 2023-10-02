import '../styles/styles.css';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const FormikCompoentsPage = () => {
  return (
    <div>
      <h1>FormikComponentsPage</h1>
      <hr />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 chars o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe tener 15 chars o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Debe ser un email valido')
            .max(255)
            .required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Opcion no permitida')
            .required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' placeholder="First Name"/>
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <label htmlFor='jobType'>Job Type</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick Something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>It senior</option>
              <option value='it-jr'>It junior</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
