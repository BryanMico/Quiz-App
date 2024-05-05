import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeStyles from '../Styles/HomeStyles';

const Home = () => {
  const navigation = useNavigation();
  const userData = { username: 'JohnDoe', email: 'johndoe@example.com' };
  
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.welcomeText}>Welcome to the Home Screen!</Text>
      <Text>User: {userData.username}</Text>
      <Text>Email: {userData.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};



export default Home;