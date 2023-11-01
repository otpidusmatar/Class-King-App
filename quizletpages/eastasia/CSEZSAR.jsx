import { Component } from 'react';
import { Text, Pressable, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import OptionsToolbar from '../../OptionsToolbar.jsx';
import BackgroundImage from '../../assets/learning-3245793_1280.jpg';

class MyInlineWeb extends Component { 
  render() { 
    return ( 
      <WebView 
        originWhitelist={['*']} 
        source={{ html: '<iframe src="https://quizlet.com/827328829/match/embed?i=23vdrc&x=1jj1" height="80%" width="100%" style="border:0"></iframe>' }} /> 
    ); 
  }
  } 

export default function CSEZSAR() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode={'cover'} style={styles.container}>
        <MyInlineWeb />
        <OptionsToolbar navigation={navigation} />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    marginBottom: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheading: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
