import React, { useState } from 'react';
import { View, TextInput, Text, Alert, Image, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LoginStyles from '../Styles/LoginStyles';
import CustomButton from '../Styles/ButtonStyle';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Loading');
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  const handleRegister = () => {
  
  };

  const RegisterLink = ({ onPress, text }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={LoginStyles.link}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={LoginStyles.container}>
      <Image 
        source={require('../assets/Logo.png')}
        style={LoginStyles.logo}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <CustomButton
        title="LOGIN"
        onPress={handleLogin}
      />
      <Text>Don't have an Account?</Text>
      <RegisterLink onPress={handleRegister} text="Register now!" />
    </View>
  );
};

export default Login;
