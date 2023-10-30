import { useState } from 'react';
import { Text, Pressable, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SubjectScrollList from './SubjectScrollList.jsx';
import OptionsToolbar from './OptionsToolbar.jsx';
import BackgroundImage from './assets/learning-3245793_1280.jpg';
import DarkBlueButton from './assets/blue-23954_1280.png';

export default function Home() {
  const navigation = useNavigation();
  const [chosenSubject, setChosenSubject] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode={'cover'} style={styles.container}>
      <View style={styles.buttonBarContainer}>
      <Card onPress={() => setChosenSubject(0)}>
        <View style={styles.buttonContainer}>
          <ImageBackground source={DarkBlueButton} resizeMode={'cover'} style={styles.actualbuttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => setChosenSubject(0)}>
              <Text style={styles.buttonLabel}>Biology I-H</Text>
            </Pressable>
            </ImageBackground>
          </View>
      </Card>
      <Card onPress={() => setChosenSubject(1)}>
        <View style={styles.buttonContainer}>
        <ImageBackground source={DarkBlueButton} resizeMode={'cover'} style={styles.actualbuttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => setChosenSubject(1)}>
              <Text style={styles.buttonLabel}>AP Human Geo</Text>
          </Pressable>
          </ImageBackground>
        </View>
      </Card>
      <Card onPress={() => setChosenSubject(2)}>
        <View style={styles.buttonContainer}>
        <ImageBackground source={DarkBlueButton} resizeMode={'cover'} style={styles.actualbuttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => setChosenSubject(2)}>
              <Text style={styles.buttonLabel}>Subject 3</Text>
          </Pressable>
          </ImageBackground>
        </View>
      </Card>
      </View>
      <SubjectScrollList navigation={navigation} names={getChosenNames(chosenSubject)} />
      <OptionsToolbar navigation={navigation} />
      </ImageBackground>
    </SafeAreaView>
  )
}

function getChosenNames(chosenSubject) {
  switch (chosenSubject) {
    case 0:
      return [
        { 'name': 'Cell Transport & Energy', 'id': 1 },
        { 'name': 'DNA Structure & Replication', 'id': 2 },
        { 'name': 'Protein Synthesis & Gene Expression/Regulation', 'id': 3 },
        { 'name': 'More Coming Soon!', 'id': 4 },
      ];
    case 1:
      return [
        { 'name': 'North Africa & Southwest Asia Mapping Lab', 'id': 1 },
        { 'name': 'Latin America Mapping Lab', 'id': 2 },
        { 'name': 'East Asia Mapping Lab', 'id': 3 },
      ];
    case 2:
      return [
        { 'name': 'Quizlet 1', 'id': 1 },
        { 'name': 'Quizlet 2', 'id': 2 },
        { 'name': 'Quizlet 3', 'id': 3 },
        { 'name': 'Quizlet 4', 'id': 4 },
      ];
    default:
      return [];
  }
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    marginBottom: 10,
  },
  buttonContainer: {
    width: 85,
    height: 48,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  actualbuttonContainer: {
    width: 123,
    height: 82,
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
});
