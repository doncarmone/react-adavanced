import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    email,
    name,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate autoComplete='false' onSubmit={onSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Este campo es necesario</span>}
        <input
          name='password1'
          type='password'
          placeholder='Password'
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Este campo debe ser mayor a 6</span>
        )}
        <input
          name='password2'
          type='password'
          placeholder='Repeat Password'
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1 !== password2 && password1.trim().length > 0 && (
          <span>Las contrasenas deber ser iguales</span>
        )}
        <button type='submit'>Create</button>
        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
};
