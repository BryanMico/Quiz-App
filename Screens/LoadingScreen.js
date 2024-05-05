import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import LoadingStyles from '../Styles/LoadingStyles';

const LoadingScreen = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Home');
      }, 4000); 
    }, [navigation]);

  return (
    <View style={LoadingStyles.container}>
      <Image
        source={require('../assets/Loading.gif')} 
        style={LoadingStyles.animation}
      />
    </View>
  );
};

export default LoadingScreen;
