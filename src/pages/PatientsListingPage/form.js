import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { TextInput } from '../../components/Inputs';
import DatePicker from '../../components/common/DatePicker';
import Danger from '../../components/Typography/Danger';
import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  
  inputStyle: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  marginForMd: {
    [theme.breakpoints.only('md')]: {
      marginLeft: '16px'
    },
  },
  marginLeft17: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '16px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
  },
  subTitle: {
    'font-family': 'Roboto',
    'font-size': '16px',
    'font-weight': 600,
    'font-stretch': 'normal',
    'font-style': 'normal',
    'line-height': 1.25,
    'letter-spacing': '-0.05px',
    'color': '#1e2633',
    marginBottom: '14px'
  },
  marginTop35: {
    marginTop: '35px'
  }
}));
const PatientForm = ({ onSubmit, submitBtnText, patient, schema, fields }) => {
  const classes = useStyles();
  const initialStates = {
    firstName: patient ? patient.firstName : '',
    lastName: patient ? patient.lastName : '',
    birthDate: patient ? (new Date(patient.birthDate)) : null,
    gender: patient ? patient.gender : '',
    phone: patient ? patient.phone : '',
    homePhone: patient ? patient.homePhone : '',
    email: patient ? patient.email : '',
    streetAddress1: patient ? patient.streetAddress1 : '',
    streetAddress2: patient ? patient.streetAddress2 : '',
    city: patient ? patient.city : '',
    province: patient ? patient.province : '',
    stateProvince: patient ? patient.stateProvince : '',
    postalCode: patient ? patient.postalCode : '',
    insuranceName: patient ? patient.insuranceName : '',
    insuranceMemberName: patient ? patient.insuranceMemberName : '',
    insuranceMemberID: patient ? patient.insuranceMemberID : '',
    insuranceGroupNumber: patient ? patient.insuranceGroupNumber : '',
    emergencyContact: patient ? patient.emergencyContact : '',
    emergencyContactRelation: patient ? patient.emergencyContactRelation : '',
    emergencyContactPhone: patient ? patient.emergencyContactPhone : '',
    emergencyContactHomePhone: patient ? patient.emergencyContactHomePhone : '',
    organization: patient ? patient.organization : '',
    groupId: patient ? patient.groupId : '',
    coachId: patient ? patient.coachId : '',
    coordinatorId: patient ? patient.coordinatorId : '',
    physicianId: patient ? patient.physicianId : '',
    diseaseDisorder: patient ? patient.diseaseDisorder : ''
  };  

  return(
    <Formik
      initialValues={initialStates}
      validationSchema={schema}
      enableReinitialize
      onSubmit={(values,  { resetForm }) => {
        onSubmit(values);
      }}
    >
      {
        ({ errors, touched, values, setFieldValue }) => {
          return (
            <Form style={{width: '100%'}}>
              <Grid container item className={classes.content}>
                {
                  fields.map(field => {
                    if(field.type === 'heading'){
                      return (
                        <Grid container key={field.key}> 
                          <Typography className={classes.subTitle + ' ' + (field.margin ? classes.marginTop35 : '')}>
                            {field.label}
                          </Typography>
                        </Grid>
                      );
                    };
                    if(field.type === 'text'){
                      return (

                        <Grid key={field.key} item xs={12} sm={12} md={6} lg={3}>
                          <TextInput label={field.label}  itemClass={field.margin ? classes.marginLeft17 : ''}
                            value={values[field.key]}
                            name={field.key}
                            type="text"
                            className={classes.inputStyle}
                            onChange={e => setFieldValue(field.key, e.target.value)}
                          />
                          <Danger className={field.margin ? classes.marginLeft17 : ''}>{errors[field.key]}</Danger>
                        </Grid>
                      );

                    }
                    if(field.type === 'date'){
                      return (
                        <Grid key={field.key} item xs={12} sm={12} md={6} lg={3} >
                          <DatePicker
                            selectedDate={values[field.key]}
                            onChange={e => {
                              setFieldValue(field.key,e);
                            }}
                            placeholder={field.label}
                            innputPropsClass={classes.height50}
                            className={classes.inputStyle + ' '+ classes.marginLeft17 }/>
                          <Danger className={classes.marginLeft17}>{errors.birthDate}</Danger>
                        </Grid>
                      );
                    }
                    if(field.type === 'select'){
                      return (
                        <Grid key={field.key} item xs={12} sm={12} md={6} lg={3} >
                          <Grid item className={field.margin ? classes.marginLeft17 : ''}>
                            <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                              <InputLabel id="demo-simple-select-outlined-label">{field.label}</InputLabel>
                              <Select
                                style={{width: '100%'}}
                                label={field.label}
                                value={values[field.key]  || ''}
  
                                onChange={e => setFieldValue(field.key, e.target.value)}
                                className={classes.height50}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {
                                  Object.keys(field.options).map(option => {
                                    return (
                                      <MenuItem  key={`${option}`} value={`${option}`}>{field.options[option]}</MenuItem>
                                    );
                                  })
                                }
                              </Select>
                            </FormControl>
                          </Grid>
                        
                          <Danger className={classes.marginLeft17}>{errors[field.key]}</Danger>
                        </Grid>
                      );
                    }
                  })
                }
                
                {/* <Grid item xs={12} sm={12} md={6} lg={3} >
                  <Grid item className={classes.marginLeft17}>
                    <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                      <InputLabel id="demo-simple-select-outlined-label">Sex at Birth</InputLabel>
                      <Select
                        style={{width: '100%'}}
                        label="Sex at Birth"
                        value={values['gender']  || ''}
                        onChange={e => setFieldValue('gender', e.target.value)}
                        className={classes.height50}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                        <MenuItem value={'male'}>Male</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Danger className={classes.marginLeft17}>{errors.gender}</Danger>
                </Grid>
                    
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <TextInput label="Home Phone" 
                    value={values['homePhone']}
                    name="homePhone"
                    type="text"
                    className={classes.inputStyle}
                    onChange={e => setFieldValue('homePhone', e.target.value)}
                  />
                  <Danger>{errors.homePhone}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="Phone (required)"  itemClass={classes.marginLeft17 + ' ' + classes.marginForMd}
                    value={values['phone']}
                    name="phone"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('phone', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.lastName}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="Email"  itemClass={classes.marginLeft17}
                    value={values['email']}
                    name="email"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('email', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.email}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="Address 1"  itemClass={classes.marginLeft17}
                    value={values['streetAddress1']}
                    name="streetAddress1"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('streetAddress1', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.streetAddress1}</Danger>
                </Grid>
                    
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <TextInput label="Address 2" 
                    value={values['streetAddress2']}
                    name="streetAddress2"
                    type="text"
                    className={classes.inputStyle}
                    onChange={e => setFieldValue('streetAddress2', e.target.value)}
                  />
                  <Danger>{errors.streetAddress2}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="City"  itemClass={classes.marginLeft17}
                    value={values['city']}
                    name="city"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('city', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.city}</Danger>
                </Grid>
                
                <Grid item xs={12} sm={12} md={6} lg={3} > 
                  <TextInput label="Zip Code"  itemClass={classes.marginLeft17}
                    value={values['postalCode']}
                    name="postalCode"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('postalCode', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.postalCode}</Danger>
                </Grid>
                */}
                {/* <Grid container item xs={12} md={12} sm={12}>
                  <Grid item xs={12} sm={12} md={6} lg={3}>
  
                    <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                      <InputLabel id="demo-simple-select-outlined-label">Organization</InputLabel>
                      <Select
                        style={{width: '100%'}}
                        label="State"
                        value={values['organization']  || ''}
  
                        onChange={e => setFieldValue('organization', e.target.value)}
                        className={classes.height50}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {
                          Object.keys(states).map(state => {
                            return (
                              <MenuItem  key={state} value={`${state}`}>{states[state]}</MenuItem>
                            );
                          })
                        }
                      </Select>
                    </FormControl>
                    <Danger>{errors.organization}</Danger>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} >
                    <Grid item className={classes.marginLeft17}>
                        
                      <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                        <InputLabel id="demo-simple-select-outlined-label">Coordinator</InputLabel>
                        <Select
                          style={{width: '100%'}}
                          label="State"
                          value={values['coordinatorId'] || ''}
  
                          onChange={e => setFieldValue('coordinatorId', e.target.value)}
                          className={classes.height50}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {
                            Object.keys(states).map(state => {
                              return (
                                <MenuItem  key={state} value={`${state}`}>{states[state]}</MenuItem>
                              );
                            })
                          }
                        </Select>
                      </FormControl>
                    </Grid>
                    <Danger className={classes.marginLeft17}>{errors.coordinatorId}</Danger>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} >
                    <Grid item className={classes.marginLeft17}>
  
                      <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                        <InputLabel id="demo-simple-select-outlined-label">Physician</InputLabel>
                        <Select
                          style={{width: '100%'}}
                          label="State"
                          value={values['physicianId']  || ''}
  
                          onChange={e => setFieldValue('physicianId', e.target.value)}
                          className={classes.height50}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {
                            Object.keys(states).map(state => {
                              return (
                                <MenuItem  key={state} value={`${state}`}>{states[state]}</MenuItem>
                              );
                            })
                          }
                        </Select>
                      </FormControl>
                          
                    </Grid>
                    <Danger className={classes.marginLeft17}>{errors.physicianId}</Danger>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3} >
                    <Grid item className={classes.marginLeft17}>
  
                      <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                        <InputLabel id="demo-simple-select-outlined-label">Coach</InputLabel>
                        <Select
                          style={{width: '100%'}}
                          label="State"
                          value={values['coachId']  || ''}
  
                          onChange={e => setFieldValue('coachId', e.target.value)}
                          className={classes.height50}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {
                            Object.keys(states).map(state => {
                              return (
                                <MenuItem  key={state} value={`${state}`}>{states[state]}</MenuItem>
                              );
                            })
                          }
                        </Select>
                      </FormControl>
                    </Grid>
                    <Danger className={classes.marginLeft17}>{errors.coachId}</Danger>
                  </Grid>
                </Grid>
                 */}
                {/* <Grid container>
                  <Grid item xs={12} sm={12} md={6} lg={3} >
                    <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                      <InputLabel id="demo-simple-select-outlined-label">Disease Disorder</InputLabel>
                      <Select
                        style={{width: '100%'}}
                        label="Disease Disorder"
                        value={values['diseaseDisorder']  || ''}
                        onChange={e => setFieldValue('diseaseDisorder', e.target.value)}
                        className={classes.height50}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {
                          diseaseType.map((dt, index) => {
                            return (
                              <MenuItem  key={index} value={dt.value}>{dt.label}</MenuItem>
                            );
                          })
                        }
                      </Select>
                    </FormControl>
                          
                    <Danger className={classes.marginLeft17}>{errors.diseaseDisorder}</Danger>
                  </Grid>
                </Grid> */}
                {/* <Grid container>
                  <Typography className={classes.subTitle+' '+ classes.marginTop35 }>
                      Insurance
                  </Typography>
                </Grid> */}
                {/*   
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <TextInput label="Primary Insurance Name" 
                    value={values['insuranceName']}
                    name="insuranceName"
                    type="text"
                    className={classes.inputStyle}
                    onChange={e => setFieldValue('insuranceName', e.target.value)}
                  />
                  <Danger>{errors.insuranceName}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="Member Name"  itemClass={classes.marginLeft17}
                    value={values['insuranceMemberName']}
                    name="insuranceMemberName"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('insuranceMemberName', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.insuranceMemberName}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="Member ID"  itemClass={classes.marginLeft17}
                    value={values['insuranceMemberID']}
                    name="insuranceMemberID"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('insuranceMemberID', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.insuranceMemberID}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="Group Number"  itemClass={classes.marginLeft17}
                    value={values['insuranceGroupNumber']}
                    name="insuranceGroupNumber"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('insuranceGroupNumber', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.insuranceGroupNumber}</Danger>
                </Grid>
                <Grid container>
                  <Typography className={classes.subTitle+' '+ classes.marginTop35 }>
                      Emergency Contact
                  </Typography>
                </Grid>
  
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <TextInput label="Name" 
                    value={values['emergencyContact']}
                    name="emergencyContact"
                    type="text"
                    className={classes.inputStyle}
                    onChange={e => setFieldValue('emergencyContact', e.target.value)}
                  />
                  <Danger>{errors.emergencyContact}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <Grid item className={classes.marginLeft17}>
  
                    <FormControl variant="outlined" className={classes.inputStyle + ' ' + classes.height50} style={{width: '100%'}}>
                      <InputLabel id="demo-simple-select-outlined-label">Relationship</InputLabel>
                      <Select
                        style={{width: '100%'}}
                        label="State"
                        value={values['emergencyContactRelation'] || ''}
  
                        onChange={e => setFieldValue('emergencyContactRelation', e.target.value)}
                        className={classes.height50}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {
                          Object.keys(relationships).map(relation => {
                            return (
                              <MenuItem  key={relation} value={`${relation}`}>{relationships[relation]}</MenuItem>
                            );
                          })
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                  <Danger className={classes.marginLeft17}>{errors.emergencyContactRelation}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} >
                  <TextInput label="Home Phone"  itemClass={classes.marginLeft17}
                    value={values['emergencyContactHomePhone']}
                    name="emergencyContactHomePhone"
                    className={classes.inputStyle}
                    type="text"
                    onChange={e => setFieldValue('emergencyContactHomePhone', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.emergencyContactHomePhone}</Danger>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} > 
                  <TextInput label="Phone Number"  itemClass={classes.marginLeft17}
                    value={values['emergencyContactPhone']}
                    name="emergencyContactPhone"
                    className={classes.inputStyle}
  
                    type="text"
                    onChange={e => setFieldValue('emergencyContactPhone', e.target.value)}
                  />
                  <Danger className={classes.marginLeft17}>{errors.emergencyContactPhone}</Danger>
                </Grid>
                */}
              </Grid>
              <Grid style={{
                paddingTop: '50px',
                display: 'flex',
                justifyContent: 'flex-end'}}>
                <PrimaryButton style={{width: '176px'}}>
                  <Typography style={{fontSize: '15px', fontWeight: 600}}>
                    {submitBtnText || 'ADD NEW PATIENT'}
                  </Typography>
                </PrimaryButton>
              </Grid>
            </Form>
          );
        }
      }
    </Formik>
  );
};
export default PatientForm;