import { StyleSheet } from 'react-native';

const QuizStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#C1FF72', 

    },
    buttonRow: {
      flexDirection: 'row',
    },
    text:{ 
        color: '#2F3500', 
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
      padding: 30,
      marginTop: 10,
      borderRadius: 5,
      marginRight: 10,
      backgroundColor: '#CFEB8D',
      borderColor: '#907543',
      borderWidth: 1, 

    },
    goBackButton: {
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: '#CFEB8D',
        borderColor: '#907543',
        borderWidth: 1, 
    },
    buttonContent: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonText: {
      marginTop: 5,
      fontSize: 15
    },
    icon: {
      width: 50,
      height: 50,
    },
    logo: {
        height: 250,
        width: 250,
      },
  });

export default QuizStyles;
