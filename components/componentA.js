import React,{useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {CountContext} from '../App'

function ComponentA(){
    const countContext=useContext(CountContext)
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>COUNT IN COMPONENT A</Text>
        <Text style={styles.text}>Count : {countContext.countState}</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() =>countContext.countDispatch({type: 'increment', value: 1})}>
          <Text style={styles.button}>INCREMENT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => countContext.countDispatch({type: 'decrement', value: 1})}>
          <Text style={styles.button}> DEREMENT </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity onPress={() => countContext.countDispatch({type: 'reset'})}>
          <Text style={styles.button}>     RESET     </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default ComponentA

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
    },
    container1: {
      flex: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#2029E0',
      borderRadius: 12,
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      overflow: 'hidden',
      padding: 12,
      textAlign: 'center',
    },
  });
  