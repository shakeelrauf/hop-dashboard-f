import TypographyPage from './pages/Typography/Typography';
import BoookFormPage from './pages/BookFormPage';
import LoginPage from './pages/Auth/LoginPage';
import MessagesPage from './pages/MessagesPage';
import PatientsPage from './pages/PatientsPage';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';

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
    path: '/dashboard',
    component: PatientsPage,
    layout: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    layout: '/auth'
  },
  {
    path: '/messages',
    component: MessagesPage,
    layout: '/main'
  },
  {
    path: '/patients',
    component: PatientsPage,
    layout: '/main'
  },
  {
    path: '/profile-settings',
    component: ProfileSettingsPage,
    layout: '/main'
  },
  {
    path: '/reset-password',
    component: ResetPasswordPage,
    layout: '/auth'
  }
];

export default Routes;
