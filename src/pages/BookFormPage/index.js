import React from 'react';
import {
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import { addBook } from '../../store/actions';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';

const BookSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});

const BookFormPage = ({addBook, books}) => {
  const history = useHistory();
  const handleSubmit = (values) => {
    if (values.name) {
      addBook({name:  values.name});
      history.push('/index');
    } else {
      alert('Incorrect Credntials!');
    }
  };
  
  return (
    <Grid
      container
      direction="column"
      justify="center"
      spacing={2}
      className="login-form"
    >
      <Paper
        variant="elevation"
        elevation={2}
        className="login-background"
      >
        <Grid item>
          <Typography component="h1" variant="h5">
                  Add Dummy Form
          </Typography>
        </Grid>
        <Grid item>
          <Formik
            initialValues={{
              name: '',
            }}
            validationSchema={BookSchema}
            onSubmit={values => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container direction="column" spacing={2}>
                  <Field name="name" type="text" 
                    component={TextField}/>
                  <Grid item>
                    <PrimaryButton> Submit</PrimaryButton>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
          {
            books.map(book => {
              return (
                <Typography>
                  {book.name}
                </Typography>
              );
            })
          }
        </Grid>
      </Paper>
    </Grid>
  );
};

const mapDispatchToProps = {
  addBook: addBook
};

const mapStateToProps = (state) => {
  return{ books: state.test.books };};

const BookFormP = connect(mapStateToProps, mapDispatchToProps)(BookFormPage);
export default BookFormP;
