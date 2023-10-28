import { Component, useState } from 'react';
import { Text, Pressable, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

class Subject1Scroll extends Component {
  state = {
      names: [
         {'name': 'Quizlet 1', 'id': 1},
         {'name': 'Quizlet 2', 'id': 2},
         {'name': 'Quizlet 3', 'id': 3},
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                      <Pressable style={styles.buttonForList} onPress={() => this.props.navigation.navigate(item.name)}>
                        <Text style={styles.buttonLabel}>{item.name}</Text>
                      </Pressable>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
   }

export default function Launch() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonBarContainer}>
      <Card onPress={() => alert('Hi')}>
        <View style={styles.buttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => alert('Hi')}>
              <Text style={styles.buttonLabel}>Subject 1</Text>
            </Pressable>
          </View>
      </Card>
      <Card onPress={() => alert('bye')}>
        <View style={styles.buttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => alert('bye')}>
              <Text style={styles.buttonLabel}>Subject 2</Text>
          </Pressable>
        </View>
      </Card>
      <Card onPress={() => alert('bye')}>
        <View style={styles.buttonContainer}>
          <Pressable
              style={styles.button}
              onPress={() => alert('bye')}>
              <Text style={styles.buttonLabel}>Subject 3</Text>
          </Pressable>
        </View>
      </Card>
      </View>
      <Subject1Scroll navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonBarContainer: {
    flexDirection: 'row',
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
  },
  item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'white',
   },
});
