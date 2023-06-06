import { TextField, Typography } from '@mui/material'
import { Form, Formik } from 'formik';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { searchUserValidator } from '../helpers/validator';
import { getUser, searchUser } from './api/user';
import Loader from '../components/loader';
import AccordionResult from '../components/accordionResult';

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(false);

  const initialValues = { user: '' };

  const onHandleSubmit = (value: any) => {
    console.log('onHandleSubmit', value);

    if (value) {
      setSearchValue(value?.user);

      searchUser(value?.user)
        .then((res: any) => {
          setData(res);
          setLoading(false);
        })
        .catch((error: any) => {
          console.log('error: ', error);
          setData([]);
          setLoading(false);
        })
    }
  }

  
  return (
    <div id='home-container'>
      <Typography variant="h4">
        Find The User
      </Typography>
      <Typography variant="h6">
        Find the user by search in field below, you can search up to 5 user.
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={searchUserValidator}
        onSubmit={(values, actions) => {
          setLoading(true);
          onHandleSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          errors,
        }) => {
          return <>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <div className="input-wrapper">
                <TextField
                  id='user'
                  name='user'
                  label='User'
                  variant='standard'
                  onChange={(e: any) => setFieldValue('user', e.target.value)}
                />
                {
                  errors && errors.user && <div className='error-field'>{errors.user}</div>
                }
              </div>

              <div className="button-wrapper">
                <button
                  className="default-button"
                  role="button"
                  type="submit"
                  disabled={
                    isSubmitting ||
                    Object.keys(errors).length > 0 ||
                    Object.keys(values).length < 1
                  }
                >
                  Search
                </button>
              </div>
            </Form>
          </>
        }}
      </Formik>

      {
        loading 
          ? <Loader/>
          : searchValue && <div className="search-result-wrapper">
            <div className="search-value-text">
              <Typography variant="body2">
                {`Showing users for "${searchValue}"`}
              </Typography>
            </div>
            {
              data && data.length > 0 ? <AccordionResult title={searchValue} repositories={data} /> : <Typography variant='subtitle1' mt={2} >no data found please try another keyword...</Typography>
            }
          </div>
      }

    </div>
  )
}

export default Home
