import { Component } from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import BluePanel from './assets/dark-blue-panel.png';
import RedButton from './assets/red-23955_1280.png';

class OptionsToolbar extends Component {
  render() {
  return (
    <View style={styles.buttonToolbarContainer}>
    <ImageBackground source={BluePanel} resizeMode='cover' style={styles.buttonToolbarContainer}>
        <Card style={styles.card}>
        <ImageBackground source={RedButton} resizeMode='cover' style={styles.redbuttonimage}>
          <View style={styles.buttonContainer}>
            <Pressable 
              style={styles.button} 
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonLabel}>Home</Text>
            </Pressable>
          </View>
          </ImageBackground>
        </Card>
        <Card style={styles.card2}>
         <ImageBackground source={RedButton} resizeMode='cover' style={styles.redbuttonimage}>
          <View style={styles.buttonContainer}>
            <Pressable 
              style={styles.button} 
              onPress={() => this.props.navigation.navigate('Help Guide')}>
              <Text style={styles.buttonLabel}>Help Guide</Text>
            </Pressable>
          </View>
        </ImageBackground>
        </Card>
      </ImageBackground>
      </View>
  )
}
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 180,
    height: 58,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  redbuttonimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 160,
    opacity: 1,
    marginRight: 60,
  },
  card: {
    width: 120,
    height: 60,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 1,
    shadowOffset: {width: 4, height: 4},    
    borderWidth: 0,
    backgroundColor: 'rgba(255, 0, 0, 0)',
  },
  card2: {
    width: 120,
    height: 60,
    marginBottom: 40,
    alignItems: 'right',
    justifyContent: 'right',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 1,
    shadowOffset: {width: 4, height: 4},    
    borderWidth: 0,
    backgroundColor: 'rgba(255, 0, 0, 0)',
  },
  buttonToolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    bottom: 0,
    width: 420,
    height: 100,
    position: 'absolute',
  },
  button: {
    borderRadius: 10,
    width: '25%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    color: 'white',
  },
});

export default OptionsToolbar;
