import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { authService } from '../services/api';
import * as SecureStore from 'expo-secure-store';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await authService.login(email, password);
      const token = response.data.token;
      await SecureStore.setItemAsync('userToken', token);
      Alert.alert('Success', 'Logged in!');
      navigation.navigate('Dashboard'); // Navigate to main screen
    } catch (error) {
      Alert.alert('Error', error.response.data.message || 'Login failed.');
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;