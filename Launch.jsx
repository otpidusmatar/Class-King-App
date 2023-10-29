import { Text, Pressable, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from './assets/learning-3245793_1280.jpg';
import ButtonImage from './assets/red-23955_1280.png';
import RedPanelImage from './assets/kw-red-rectangle-button-panel-hi.png';

export default function Launch() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
      <View style={styles.titlebar}>
      <ImageBackground source={RedPanelImage} resizeMode="cover" style={styles.redpanelimage}>
        <Text style={styles.paragraph}>Welcome to</Text>
        <Text style={styles.paragraphKing}>Class King</Text>
      </ImageBackground>
        <Text style={styles.subheadingA}>Ready to Practice?</Text>
        <Card style={styles.card}>
        <ImageBackground source={ButtonImage} resizeMode="cover" style={styles.redbuttonimage}>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonLabel}>Enter!</Text>
            </Pressable>
          </View>
        </ImageBackground>
        </Card>
      <Text style={styles.subheadingB}>The Ultimate School Test Prep Guide</Text>
      <Text style={styles.subheadingC}>© Aniket Chakraborty 2023</Text>
      </View>
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
  titlebar: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 414,
    height: 380,
    alignItems: 'center',
    justifyContent: 'top',
  },
  card: {
    width: 170,
    height: 60,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 1,
    shadowOffset: {width: 4, height: 4},    
    borderWidth: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  redpanelimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 435,
    height: 100,
    opacity: 1,
  },
  bluepanelimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 420,
    height: 40,
    opacity: 0.9,
  },
  redbuttonimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 200,
    opacity: 1,
  },
  paragraph: {
    margin: 0,
    marginBottom: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0,
    textShadowOffset: {width: 3, height: 3},
    color: 'cyan',
    opacity: 1,
  },
  paragraphKing: {
    margin: 0,
    marginBottom: 53,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0,
    textShadowOffset: {width: 3, height: 3},
    color: 'white',
    opacity: 1,
  },
  subheadingA: {
    margin: 17,
    marginBottom: 30,
    fontSize: 26,
    fontWeight: 'normal',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0,
    textShadowOffset: {width: 4, height: 4},
    color: 'cyan',
  },
  subheadingB: {
    margin: 17,
    marginBottom: 0,
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0,
    textShadowOffset: {width: 4, height: 4},
    color: 'cyan',
  },
  subheadingC: {
    margin: 3,
    marginBottom: 0,
    fontSize: 13,
    fontWeight: 'normal',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0,
    textShadowOffset: {width: 4, height: 4},
    color: 'cyan',
  },
  buttonContainer: {
    width: 320,
    height: 55,
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
