import { Text, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function TestQuizletB() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Welcome to Class King</Text>
      <Text style={styles.subheading}>Ready to start studying?</Text>
      <Card>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonLabel}>Enter!</Text>
          </Pressable>
        </View>
      </Card>
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
