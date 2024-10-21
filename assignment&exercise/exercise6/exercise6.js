import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomButton from './components/CustomButton';
import CustomTextInput from './components/CustomTextInput';
import Title from './components/Title1';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Title />
      <CustomTextInput label="Name" value={name} onChangeText={setName} />
      <CustomTextInput label="Username" value={username} onChangeText={setUsername} />
      <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
      <CustomTextInput label="Address" value={address} onChangeText={setAddress} />
      <CustomTextInput
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <CustomButton onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default RegistrationScreen;
