import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StackActions } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import client from '../api/client';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, 'Nama tidak valid!')
    .required('Nama wajib diisi!'),
  email: Yup.string().email('Email tidak valid!').required('Email wajib diisi!'),
  password: Yup.string()
    .trim()
    .min(8, 'Kata sandi terlalu pendek!')
    .required('Kata sandi wajib diisi!'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Kata sandi tidak cocok!'
  ),
});

const SignupForm = ({ navigation }) => {
  const signUp = async (values, formikActions) => {
    try {
      const res = await client.post('/create-user', { ...values });

      if (res.data.success) {
        const signInRes = await client.post('/sign-in', {
          email: values.email,
          password: values.password,
        });

        if (signInRes.data.success) {
          navigation.dispatch(
            StackActions.replace('ImageUpload', {
              token: signInRes.data.token,
            })
          );
        }
      }

      formikActions.resetForm();
      formikActions.setSubmitting(false);
    } catch (error) {
      console.error('Error during sign up:', error.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred during sign up.',
      });

      formikActions.setSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          fullname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <FormInput
              value={values.fullname}
              error={touched.fullname && errors.fullname}
              onChangeText={handleChange('fullname')}
              onBlur={handleBlur('fullname')}
              label='Nama Lengkap'
              placeholder='masukan nama anda'
            />
            <FormInput
              value={values.email}
              error={touched.email && errors.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCapitalize='none'
              label='Email'
              placeholder='pengguna@email.com'
            />
            <FormInput
              value={values.password}
              error={touched.password && errors.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              autoCapitalize='none'
              secureTextEntry
              label='Password'
              placeholder='********'
            />
            <FormInput
              value={values.confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              autoCapitalize='none'
              secureTextEntry
              label='Confirm Password'
              placeholder='********'
            />
            <FormSubmitButton
              submitting={isSubmitting}
              onPress={handleSubmit}
              title='Sign up'
            />
          </>
        )}
      </Formik>
    </FormContainer>
  );
};


export default SignupForm;
