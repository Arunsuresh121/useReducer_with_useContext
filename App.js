import React, {useReducer} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const initialState = {firstConter: 0};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {firstConter: state.firstConter + action.value};
    case 'decrement':
      return {firstConter: state.firstConter - action.value};
    case 'reset':
      return initialState;
    default:
      return start;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>Count : {count.firstConter}</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => dispatch({type: 'increment', value: 1})}>
          <Text style={styles.button}>INCREMENT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => dispatch({type: 'decrement', value: 1})}>
          <Text style={styles.button}> DEREMENT </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => dispatch({type: 'reset'})}>
          <Text style={styles.button}>     RESET     </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
});
