import { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

class OptionsToolbar extends Component {
  render() {
  return (
    <View style={styles.buttonToolbarContainer}>
        <Card onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.buttonContainer}>
            <Pressable 
              style={styles.button} 
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonLabel}>Content</Text>
            </Pressable>
          </View>
        </Card>
        <Card onPress={() => this.props.navigation.navigate('Help Guide')}>
          <View style={styles.buttonContainer}>
            <Pressable 
              style={styles.button} 
              onPress={() => this.props.navigation.navigate('Help Guide')}>
              <Text style={styles.buttonLabel}>Help Guide</Text>
            </Pressable>
          </View>
        </Card>
      </View>
  )
}
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 180,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonToolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  },
});

export default OptionsToolbar;
