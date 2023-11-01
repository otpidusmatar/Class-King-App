import { Component } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import RedPanelImage from './assets/kw-red-rectangle-button-panel-hi.png';

class Subject1Scroll extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.names.map((item, index) => (
            <View key={item.id} style={styles.buttonContainer}>
            <ImageBackground source={RedPanelImage} resizeMode='cover' style={styles.item}>
              <Pressable
                style={styles.buttonForList}
                onPress={() => this.props.navigation.navigate(item.name)}>
                <Text style={styles.buttonLabel}>{item.name}</Text>
              </Pressable>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 360,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOffset: {width: 4, height: 8},
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
      padding: 30,
      margin: 2,
      width: 380,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'white',
   },
});

export default Subject1Scroll;
