import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import client from '../api/client';
import { useLogin } from '../context/LoginProvider';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

const LoginForm = ({navigation}) => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('semua form wajib diisi !', setError);

    if (!isValidEmail(email)) return updateError('email anda salah!', setError);

    if (!password.trim() || password.length < 8)
      return updateError('password terlalu pendek!', setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post('/sign-in', { ...userInfo });

        if (res.data.success) {
          setUserInfo({ email: '', password: '' });
          setProfile(res.data.user);
          setIsLoggedIn(true);
          navigation.navigate('Home');
        } else {
          setError(res.data.message);
        }

      } catch (error) {
        console.log(error);
        setError('Terjadi kesalahan');
      }
    }
  };

  return (
    <FormContainer>
      <FormInput
        value={email}
        onChangeText={value => handleOnChangeText(value, 'email')}
        label='Email'
        placeholder='pengguna@email.com'
        autoCapitalize='none'
      />

      <FormInput
        value={password}
        onChangeText={value => handleOnChangeText(value, 'password')}
        label='Password'
        placeholder='********'
        autoCapitalize='none'
        secureTextEntry
      />

      <FormSubmitButton onPress={submitForm} title='Masuk' />

      {/* Tampilkan pesan kesalahan jika ada */}
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
    padding: 3
  },
});

export default LoginForm;
