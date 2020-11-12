import * as Yup from 'yup';

const states = {
  'AL': 'ALABAMA',
  'AK': 'ALASKA',
  'AS': 'AMERICAN SAMOA',
  'AZ': 'ARIZONA',
  'AR': 'ARKANSAS',
  'CA': 'CALIFORNIA',
  'CO': 'COLORADO',
  'CT': 'CONNECTICUT',
  'DE': 'DELAWARE',
  'DC': 'DISTRICT OF COLUMBIA',
  'FM': 'FEDERATED STATES OF MICRONESIA',
  'FL': 'FLORIDA',
  'GA': 'GEORGIA',
  'GU': 'GUAM GU',
  'HI': 'HAWAII',
  'ID': 'IDAHO',
  'IL': 'ILLINOIS',
  'IN': 'INDIANA',
  'IA': 'IOWA',
  'KS': 'KANSAS',
  'KY': 'KENTUCKY',
  'LA': 'LOUISIANA',
  'ME': 'MAINE',
  'MH': 'MARSHALL ISLANDS',
  'MD': 'MARYLAND',
  'MA': 'MASSACHUSETTS',
  'MI': 'MICHIGAN',
  'MN': 'MINNESOTA',
  'MS': 'MISSISSIPPI',
  'MO': 'MISSOURI',
  'MT': 'MONTANA',
  'NE': 'NEBRASKA',
  'NV': 'NEVADA',
  'NH': 'NEW HAMPSHIRE',
  'NJ': 'NEW JERSEY',
  'NM': 'NEW MEXICO',
  'NY': 'NEW YORK',
  'NC': 'NORTH CAROLINA',
  'ND': 'NORTH DAKOTA',
  'MP': 'NORTHERN MARIANA ISLANDS',
  'OH': 'OHIO',
  'OK': 'OKLAHOMA',
  'OR': 'OREGON',
  'PW': 'PALAU',
  'PA': 'PENNSYLVANIA',
  'PR': 'PUERTO RICO',
  'RI': 'RHODE ISLAND',
  'SC': 'SOUTH CAROLINA',
  'SD': 'SOUTH DAKOTA',
  'TN': 'TENNESSEE',
  'TX': 'TEXAS',
  'UT': 'UTAH',
  'VT': 'VERMONT',
  'VI': 'VIRGIN ISLANDS',
  'VA': 'VIRGINIA',
  'WA': 'WASHINGTON',
  'WV': 'WEST VIRGINIA',
  'WI': 'WISCONSIN',
  'WY': 'WYOMING',
  'AE': 'ARMED FORCES AFRICA | CANADA | EUROPE | MIDDLE EAST',
  'AA': 'ARMED FORCES AMERICA (EXCEPT CANADA)',
  'AP': 'ARMED FORCES PACIFIC'
};
const diseaseType = [
  // { label: 'Cancer', value: 'cancer' },
  // { label: 'Hypertension', value: 'virus' },
  // { label: 'Orthopedic Diseases', value: 'orthopedic' }
  { label: 'General', value: 'general' },
  { label: 'Cancer', value: 'cancer' },
  { label: 'Diabetes', value: 'diabetes' },
  { label: 'Heart Failure', value: 'heartFailure' },
  { label: 'Hypertension', value: 'hypertension' },
  { label: 'Heart Surgery', value: 'heartSurgery' },
  // { label: 'Orthopedic General', value: 'orthopedicGeneral' },
  { label: 'Orthopedic Surgery', value: 'orthopedicSurgery' }
  // { label: 'Virus', value: 'virus' }
];
  
const relationships = {
  caregiver: 'Caregiver', child: 'Child', friend: 'Friend', parent: 'Parent', sibling: 'Sibling', spouse:'Spouse', other: 'Other'
};
const AddPatientSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  birthDate: Yup.mixed(),
  gender: Yup.string().required('Required'),
  phone: Yup.string().required('Required').matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    'Please write valid Phone Number'
  ),
  homePhone: Yup.string().matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    'Please write valid Phone Number'
  ),
  email: Yup.string().required('Required').email(),
  streetAddress1: Yup.string().required('Required'),
  streetAddress2: Yup.string().notRequired(),
  city: Yup.string().required('Required'),
  // province: Yup.string().required('Required'),
  stateProvince: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  insuranceName: Yup.string(),
  insuranceMemberName: Yup.string(),
  insuranceMemberID: Yup.string(),
  insuranceGroupNumber: Yup.string(),
  emergencyContact: Yup.string().required('Required'),
  emergencyContactRelation: Yup.string().required('Required'),
  emergencyContactPhone: Yup.string().required('Required').matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    'Please write valid Phone Number'
  ),
  emergencyContactHomePhone: Yup.string().required('Required').matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    'Please write valid Phone Number'
  ),
  organization: Yup.string().notRequired(),
  groupId: Yup.string().notRequired(),
  coachId: Yup.string().notRequired(),
  coordinatorId: Yup.string().notRequired(),
  physicianId: Yup.string().notRequired(),
  diseaseDisorder: Yup.string().notRequired()
});


export { states, diseaseType, relationships, AddPatientSchema};