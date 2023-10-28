import { Component } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

class Subject1Scroll extends Component {
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
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'white',
   },
});

export default Subject1Scroll;
