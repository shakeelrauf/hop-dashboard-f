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

const BookSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});


const BookFormPage = ({addBook, books}) => {
  const handleSubmit = (values) => {
    if (values.name) {
      addBook({name:  values.name});
    } else {
      alert('Incorrect Credntials!');
    }
  };
  
  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
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
                  Add new Book
                </Typography>
              </Grid>
              <Grid item>
                <Formik
                  initialValues={{
                    name: '',
                  }}
                  validationSchema={BookSchema}
                  onSubmit={values => {
                  // same shape as initial values
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
                      <div>
                        <Typography component="h1" variant="h5">
                          {book.name}
                        </Typography>
                      </div>
                    );
                  })
                }
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = {
  addBook: addBook
};

const mapStateToProps = (state) => {
  return{ books: state.test.books };};

const BookFormP = connect(mapStateToProps, mapDispatchToProps)(BookFormPage);
export default BookFormP;
