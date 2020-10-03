import TypographyPage from './pages/Typography/Typography';
import BoookFormPage from './pages/BookFormPage';

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
  }
];

export default Routes;
