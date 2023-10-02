import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import logo from '../logo.svg';
import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikCompoentsPage,
  FormikAbstractationPage,
} from '../03-forms';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink to='/register' activeClassName='nav-active' exact>
                Register Page Example
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' activeClassName='nav-active' exact>
                Formik Basic Example
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-yup-basic'
                activeClassName='nav-active'
                exact
              >
                Formik Yup Basic Example
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                activeClassName='nav-active'
                exact
              >
                Formik Components Example
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstractation'
                activeClassName='nav-active'
                exact
              >
                Formik Abstraction Example
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/register-formik'
                activeClassName='nav-active'
                exact
              >
                Register Formik Example
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dynamic-form'
                activeClassName='nav-active'
                exact
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/register-formik'>
            <RegisterFormikPage />
          </Route>
          <Route path='/formik-basic'>
            <FormikBasicPage />
          </Route>
          <Route path='/formik-yup-basic'>
            <FormikYupPage />
          </Route>
          <Route path='/formik-components'>
            <FormikCompoentsPage />
          </Route>
          <Route path='/formik-abstractation'>
            <FormikAbstractationPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/dynamic-form'>
            <DynamicForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
