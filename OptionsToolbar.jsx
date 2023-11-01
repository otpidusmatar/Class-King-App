import { Component } from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import BluePanel from './assets/dark-blue-panel.png';
import RedButton from './assets/red-23955_1280.png';

class OptionsToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPortrait: Dimensions.get('window').height > Dimensions.get('window').width,
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleOrientationChange);
  }

  handleOrientationChange = ({ window }) => {
    const isPortrait = window.height > window.width;
    this.setState({ isPortrait });
  };

  render() {
    const { isPortrait } = this.state;
    const cardStyles = isPortrait ? styles.card : styles.landscapeCard;
    const buttonToolbarStyles = isPortrait ? styles.buttonToolbarContainer : styles.landscapeButtonToolbarContainer
    const buttonContainerStyles = isPortrait ? styles.buttonContainer : styles.landscapeButtonContainer;
    const redbuttonimageStyles = isPortrait ? styles.redbuttonimage : styles.landscapeRedButtonImage;

    return (
      <View style={styles.buttonToolbarContainer}>
        <ImageBackground source={BluePanel} resizeMode="cover" style={buttonToolbarStyles}>
          <Card style={cardStyles}>
            <ImageBackground source={RedButton} resizeMode="cover" style={redbuttonimageStyles}>
              <View style={buttonContainerStyles}>
                <Pressable
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={styles.buttonLabel}>Home</Text>
                </Pressable>
              </View>
            </ImageBackground>
          </Card>
          <Card style={styles.card2}>
            <ImageBackground source={RedButton} resizeMode="cover" style={styles.redbuttonimage}>
              <View style={buttonContainerStyles}>
                <Pressable
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('Help Guide')}>
                  <Text style={styles.buttonLabel}>Help / Guide</Text>
                </Pressable>
              </View>
            </ImageBackground>
          </Card>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Existing styles
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
    height: 80,
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
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    color: 'white',
  },

  // New styles for landscape orientation
  landscapeCard: {
    width: 720,
    height: 60,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowRadius: 1,
    shadowOffset: { width: 4, height: 4 },
    borderWidth: 0,
    backgroundColor: 'rgba(255, 0, 0, 0)',
  },
  landscapeButtonContainer: {
    width: 780,
    height: 58,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  landscapeButtonToolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    bottom: 0,
    width: 1200,
    height: 80,
    position: 'absolute',
  },
  landscapeRedButtonImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 160,
    opacity: 1,
    marginRight: 60,
  },
});

export default OptionsToolbar;
