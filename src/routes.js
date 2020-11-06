import TypographyPage from './pages/Typography/Typography';
import BoookFormPage from './pages/BookFormPage';
import LoginPage from './pages/Auth/LoginPage';
import Logout from './pages/Auth/Logout';
import MessagesPage from './pages/MessagesPage';
import PatientsPage from './pages/PatientsPage';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import PatientsListingPage from './pages/PatientsListingPage';

const Routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    layout: '/auth'
  },
  {
    path: '/reset-password',
    component: ResetPasswordPage,
    layout: '/auth'
  },
  {
    path: '/home',
    name: 'Typography',
    rtlName: 'لوحة القيادة',
    component: TypographyPage,
    layout: '/main'
  },
  {
    path: '/logout',
    component: Logout,
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
    path: '/messages',
    component: MessagesPage,
    layout: '/main'
  },
  {
    path: '/profile-settings',
    component: ProfileSettingsPage,
    layout: '/main'
  },
  {
    path: '/patients',
    component: PatientsListingPage,
    layout: '/main'
  }
];

export default Routes;
