import * as Yup from 'yup';

export const searchUserValidator = Yup.object().shape({
  user: Yup.string()
    .required('User is required!')
    .min(3, 'Must at least 3 character'),
});