import { useState } from 'react';
import { Text, Pressable, SafeAreaView, StyleSheet, View, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SubjectScrollList from './SubjectScrollList.jsx';
import OptionsToolbar from './OptionsToolbar.jsx';
import BackgroundImage from './assets/learning-3245793_1280.jpg';

export default function Home() {
  const navigation = useNavigation();
  const [chosenSubject, setChosenSubject] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode={'cover'} style={styles.container}>
      <View style={styles.buttonBarContainer}>
      <Card onPress={() => setChosenSubject(0)}>
        <View style={styles.buttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => setChosenSubject(0)}>
              <Text style={styles.buttonLabel}>Biology I Honors</Text>
            </Pressable>
          </View>
      </Card>
      <Card onPress={() => setChosenSubject(1)}>
        <View style={styles.buttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => setChosenSubject(1)}>
              <Text style={styles.buttonLabel}>AP Human Geo</Text>
          </Pressable>
        </View>
      </Card>
      <Card onPress={() => setChosenSubject(2)}>
        <View style={styles.buttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => setChosenSubject(2)}>
              <Text style={styles.buttonLabel}>Subject 3</Text>
          </Pressable>
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
        { 'name': 'Cell Transport and Energy', 'id': 1 },
        { 'name': 'DNA Structure and Replication', 'id': 2 },
        { 'name': 'Protein Synthesis and Gene Expression/Regulation' },
      ];
    case 1:
      return [
        { 'name': 'North Africa and Southwest Asia Mapping Lab', 'id': 1 },
        { 'name': 'Latin America Mapping Lab', 'id': 2 },
        { 'name': 'East Asia Mapping Lab', 'id': 3 },
      ];
    case 2:
      return [
        { 'name': 'Quizlet 1', 'id': 1 },
        { 'name': 'Quizlet 2', 'id': 2 },
        { 'name': 'Quizlet 3', 'id': 3 },
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
  buttonLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
  },
});
