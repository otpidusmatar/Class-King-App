import { ScrollView, View, Text, Pressable, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import OptionsToolbar from '../OptionsToolbar.jsx';
import BackgroundImage from '../assets/learning-3245793_1280.jpg';
import RedPanelImage from '../assets/kw-red-rectangle-button-panel-hi.png';

class MapList extends Component {
  state = {
      names: [
         {'name': 'Major Cities in Latin America', 'id': 1},
         {'name': 'Physical Features of Latin America', 'id': 2},
         {'name': 'Religions and Languages of Latin America', 'id': 3},
         {'name': 'Latin America: The Why of Where', 'id': 1},
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                     <ImageBackground source={RedPanelImage} resizeMode='cover' style={styles.image}>
                      <Pressable 
                        style={styles.buttonForList} 
                        onPress={() => this.props.navigation.navigate(item.name)}>
                        <Text style={styles.buttonLabel}>{item.name}</Text>
                      </Pressable>
                      </ImageBackground>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
   }

export default function LatinAmerica() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode={'cover'} style={styles.container}>
        <MapList navigation={navigation} />
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
});
