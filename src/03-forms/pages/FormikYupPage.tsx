import '../styles/styles.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export const FormikYupPage = () => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
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
    }),
  });

  return (
    <div>
      <h1>FormikYupPage</h1>
      <hr />
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' {...getFieldProps('firstname')} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' {...getFieldProps('lastname')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor='email'>Email</label>
        <input type='email' {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
