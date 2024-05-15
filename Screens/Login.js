import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Alert, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import "react-native-gesture-handler";
import LoginStyles from "../Styles/LoginStyles";
import CustomButton from "../Styles/ButtonStyle";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const users = await AsyncStorage.getItem("users");
        if (users) {
          setRegisteredUsers(JSON.parse(users));
        }
      } catch (error) {
        console.error("Error fetching registered users:", error);
      }
    };
    fetchRegisteredUsers();
  }, []);
  
  const handleLogin = () => {
    const isAdmin = username === 'admin' && password === 'password';
    const isRegisteredUser = registeredUsers.find(user => user.username === username && user.password === password);
  
    if (isRegisteredUser) {
      navigation.navigate('Loading', { username: username });
    } else if (isAdmin || (username && password)) {
      navigation.navigate('Loading', {username: username, destination: 'Home' });
    } else {
      Alert.alert("Login Failed", "Incorrect username or password");
    }
  };

  const handleRegister = () => {
    navigation.navigate('Loading', { destination: 'Register' });
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
      <Image source={require("../assets/Logo.png")} style={LoginStyles.logo} />
      <TextInput
        style={LoginStyles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <CustomButton title="LOGIN" onPress={handleLogin} />
      <Text>Don't have an Account?</Text>
      <RegisterLink onPress={handleRegister} text="Register now!" />
    </View>
  );
};

export default Login;
