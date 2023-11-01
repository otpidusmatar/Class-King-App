import { ScrollView, View, Text, Pressable, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Component, useRef } from 'react';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import OptionsToolbar from './OptionsToolbar.jsx';
import BackgroundImage from './assets/learning-3245793_1280.jpg';

export default function ContactUs() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode={'cover'} style={styles.container}>
        <Card style={styles.image}>
          <Text style={styles.paragraph}>Questions regarding this app? Contact us at:</Text>
          <Text style={styles.text}>Email: chakrani@studentmail.conroeisd.net</Text>
        </Card>
        <OptionsToolbar navigation={navigation} />
      </ImageBackground>
    </SafeAreaView>
  )

}

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'top',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'left',
      padding: 10,
      margin: 2,
      width: 380,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'white',
   },
  image2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'top',
      alignItems: 'left',
      width: 200,
      height: 350,
      marginBottom: 10,
   },
  image3: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'top',
      alignItems: 'left',
      width: 350,
      height: 200,
      marginBottom: 10,
   },
  buttonContainer: {
    width: 70,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '25%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonForList: {
    borderRadius: 10,
    width: '25%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {width: 2, height: 2}
  },
  item: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 0,
   },
  paragraph: {
    margin: 0,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
  tochead: {
    margin: 0,
    marginTop: 0,
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
  text: {
    margin: 0,
    marginBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
  subheading: {
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    // textShadowColor: 'rgba(0, 0, 0, 1)',
    // textShadowRadius: 0,
    // textShadowOffset: {width: 3, height: 3},
    color: 'black',
    opacity: 1,
  },
});