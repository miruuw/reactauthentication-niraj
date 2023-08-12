import { View, Text } from 'react-native'
import React from 'react'

import FormContainer from '../components/FormContainer'
import { Formik } from 'formik'
import FormInput from '../components/FormInput'
import FormSubmitButton from '../components/FormSubmitButton'

const SignupForm = () => {
  return (
    <FormContainer>
      <Formik>
        <>
        <FormInput
          placeholder= 'Nama Anda'
          label='Nama Lengkap'/>
        <FormInput
        placeholder='Pengguna@gmail.com'
        label='Email'/>
        <FormInput
        placeholder='********'
        label='Kata Sandi'/>
        <FormInput
        placeholder='********'
        label='Konfirmasi Kata Sandi'/>

        <FormSubmitButton title='Daftar'/>
        </>
      </Formik>
    </FormContainer>
  )
}

export default SignupForm