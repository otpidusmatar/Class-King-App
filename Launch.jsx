import { Text, Pressable, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from './assets/learning-3245793_1280.jpg';

export default function Launch() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
      <Text style={styles.paragraph}>Welcome to Class King</Text>
      <Text style={styles.subheading}>Ready to start practicing?</Text>
      <Card>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonLabel}>Enter!</Text>
          </Pressable>
        </View>
      </Card>
      <Text style={styles.subheading}>The Ultimate School Prep Guide</Text>
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
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  paragraph: {
    margin: 20,
    marginBottom: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0,
    textShadowOffset: {width: 4, height: 4},
    color: 'white',
  },
  subheading: {
    margin: 17,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 0,
    textShadowOffset: {width: 4, height: 4},
    color: 'white',
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
