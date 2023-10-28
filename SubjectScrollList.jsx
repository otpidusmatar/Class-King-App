import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

class Subject1Scroll extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          {this.props.names.map((item, index) => (
            <View key={item.id} style={styles.item}>
              <Pressable
                style={styles.buttonForList}
                onPress={() => this.props.navigation.navigate(item.name)}>
                <Text style={styles.buttonLabel}>{item.name}</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
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

export default Subject1Scroll;
