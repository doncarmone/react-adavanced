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

export const Navigation = () => {
  return (
    <Router>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink to='/register' activeClassName='nav-active' exact>
                RegisterPage
              </NavLink>
            </li>
            <li>
              <NavLink to='/formik-basic' activeClassName='nav-active' exact>
                Formki-Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-yup-basic'
                activeClassName='nav-active'
                exact
              >
                Formki-yup-Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                activeClassName='nav-active'
                exact
              >
                Formki-Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstractation'
                activeClassName='nav-active'
                exact
              >
                Formki-Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/register'>
            <RegisterPage />
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
        </Switch>
      </div>
    </Router>
  );
};
