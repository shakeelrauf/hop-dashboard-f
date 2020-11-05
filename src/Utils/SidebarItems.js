
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import ROLES from './Roles';

const primaryItems = [
  {
    title: 'Home',
    component: HomeOutlined
  },
  {
    title: 'Patient Metrics',
    component: InsertChartOutlinedOutlinedIcon
  },
  {
    title: 'Providers',
    component: AccountCircleOutlinedIcon
  },
  {
    title: 'Patients',
    component: LocalHospitalOutlinedIcon,
    path: '/patients'
  },
  {
    title: 'Onboarding',
    component: AssignmentOutlinedIcon
  },
  {
    title: 'Messaging',
    component: MessageOutlinedIcon
  },
  {
    title: 'Channels',
    component: SupervisedUserCircleOutlinedIcon
  },
  {
    title: 'Notifications',
    component: NotificationsOutlinedIcon
  },
  {
    title: 'Settings',
    component: SettingsOutlinedIcon,
    path: '/profile-settings'
  }
];
const secondaryItems = [
  {
    title: 'Support',
    component: ContactSupportOutlinedIcon,
    roles: [ROLES.PHYSICIAN]
  }
];
export { primaryItems, secondaryItems };
