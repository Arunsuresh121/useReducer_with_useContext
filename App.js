import React,{useReducer} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ComponentA from './components/componentA'

export const CountContext = React.createContext()
const initialState = {firstConter: 0};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {firstConter: state.firstConter+action.value};
    case 'decrement':
      return {firstConter: state.firstConter - action.value};
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App(){
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
   <CountContext.Provider
    value={{countState:count.firstConter,countDispatch:dispatch}}>
    <View style={styles.container}>
      <Text style={styles.text}>COUNT IN APP COMPONENT</Text>
      <Text style={styles.text}>Conut : {count.firstConter}</Text>
      <ComponentA/>
    </View>
   </CountContext.Provider> 
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
  