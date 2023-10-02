import '../styles/styles.css';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MyCheckbox, MyTextInput, MySelect } from '../components';

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractation Page</h1>
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
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='First name'
            />
            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Last name'
            />
            <MyTextInput
              label='Email Adress'
              name='email'
              placeholder='example@example.com'
              type='email'
            />

            <MySelect label='Job Type' name='jobType'>
              <option value=''>Pick Something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>It senior</option>
              <option value='it-jr'>It junior</option>
            </MySelect>

            <MyCheckbox label='Terms & conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
