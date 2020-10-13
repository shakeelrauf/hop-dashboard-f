import TypographyPage from './pages/Typography/Typography';
import BoookFormPage from './pages/BookFormPage';
import {TablePage} from './pages/Table/Table';
import LoginPage from './pages/Auth/LoginPage';

const Routes = [
  {
    path: '/home',
    name: 'Typography',
    rtlName: 'لوحة القيادة',
    component: TypographyPage,
    layout: '/main'
  },
  {
    path: '/new',
    name: 'login',
    component: BoookFormPage,
    layout: '/main'
  },
  {
    path: '/index',
    name: 'Index',
    component: TablePage,
    layout: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    layout: '/auth'
  }
];

export default Routes;
